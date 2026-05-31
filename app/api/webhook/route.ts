import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

export const dynamic = 'force-dynamic';

const BACKEND_URL = process.env.BACKEND_URL;
const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET!;

async function notifyBackend(email: string, status: 'active' | 'cancelled') {
  if (!BACKEND_URL) return;
  await fetch(`${BACKEND_URL}/api/v1/internal/subscription`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-internal-secret': process.env.INTERNAL_SECRET ?? '',
    },
    body: JSON.stringify({ email, status }),
  });
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig!, WEBHOOK_SECRET);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook error: ${err.message}` }, { status: 400 });
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const email = session.customer_email ?? (session.metadata?.email as string);
        if (email) await notifyBackend(email, 'active');
        break;
      }
      case 'customer.subscription.deleted': {
        const sub = event.data.object as Stripe.Subscription;
        const customer = await stripe.customers.retrieve(sub.customer as string) as Stripe.Customer;
        if (customer.email) await notifyBackend(customer.email, 'cancelled');
        break;
      }
      case 'customer.subscription.updated': {
        const sub = event.data.object as Stripe.Subscription;
        const customer = await stripe.customers.retrieve(sub.customer as string) as Stripe.Customer;
        const status = sub.status === 'active' ? 'active' : 'cancelled';
        if (customer.email) await notifyBackend(customer.email, status);
        break;
      }
    }
  } catch (err) {
    console.error('[webhook] handler error:', err);
  }

  return NextResponse.json({ received: true });
}
