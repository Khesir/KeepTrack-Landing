'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';

function SubscriptionForm() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(searchParams.get('email') ?? '');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) { setError('Email is required.'); return; }
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/manage-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      window.location.href = data.url;
    } catch (err: any) {
      setError(err.message ?? 'Failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 bg-white/8 border border-white/15 text-snow placeholder-snow/30 rounded-xl text-sm focus:outline-none focus:border-violet/60 focus:bg-white/10 transition-colors"
        />
        {error && <p className="text-error text-xs mt-2">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-violet text-white font-semibold text-sm rounded-xl hover:bg-violet-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-violet/30"
      >
        {loading ? 'Loading…' : 'Continue →'}
      </button>
    </form>
  );
}

export default function SubscriptionPage() {
  return (
    <main className="min-h-screen bg-midnight flex items-center justify-center px-6"
      style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(83,74,183,0.15) 0%, #2C2C2A 60%)',
      }}
    >
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-midnight-soft border border-white/10 rounded-xl mb-5">
            <span className="text-snow text-sm font-bold">KT</span>
          </div>
          <h1 className="text-xl font-semibold text-snow tracking-tight">Manage your subscription</h1>
          <p className="text-snow/45 text-sm mt-2 leading-relaxed">
            Enter the email you use in Keep Track.<br />
            We'll look up your account and take you to the right place.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <Suspense fallback={null}>
            <SubscriptionForm />
          </Suspense>
          <p className="text-snow/25 text-xs mt-4 text-center">
            Secured by Stripe · No account required here
          </p>
        </div>

        <p className="text-snow/25 text-xs text-center mt-6">
          Not subscribed yet?{' '}
          <a href="/pricing" className="text-violet-light hover:text-snow transition-colors underline underline-offset-2">
            See pricing
          </a>
        </p>
      </div>
    </main>
  );
}
