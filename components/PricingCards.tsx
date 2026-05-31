import Link from 'next/link';
import { CheckIcon } from './Icons';

const FREE_FEATURES = [
  'Full monthly budgeting',
  'Savings wallets & goals',
  'Debt & receivables tracking',
  'Planned payments',
  'Subscription tracking',
  'Budget profiles',
  'Local backup & restore',
  'All platforms (offline)',
  'Light & dark mode',
];

const PLUS_FEATURES = [
  'Everything in Free',
  'Cloud sync across devices',
  'AI receipt scanner',
  'AI image upload',
  'AI monthly analytics',
  'Priority support',
];

function Check({ plus = false }: { plus?: boolean }) {
  return <CheckIcon className={`w-4 h-4 flex-shrink-0 ${plus ? 'text-violet' : 'text-success'}`} />;
}

export default function PricingCards({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
      <div className="bg-surface border border-ash rounded-2xl p-8 flex flex-col">
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-wolf-gray mb-3">Free</p>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-semibold text-midnight font-mono-nums">₱0</span>
            <span className="text-wolf-gray text-sm">/mo</span>
          </div>
          <p className="text-wolf-gray text-sm">Forever free. No card needed.</p>
        </div>

        <ul className="flex flex-col gap-3 flex-1 mb-8">
          {FREE_FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-midnight">
              <Check />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/download"
          className="block text-center px-6 py-3 border border-ash text-midnight font-semibold text-sm rounded-xl hover:bg-snow-2 transition-colors duration-200"
        >
          Download Free
        </Link>
      </div>

      <div className="bg-midnight rounded-2xl p-8 flex flex-col relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 60% at 50% 0%, rgba(83,74,183,0.25) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-violet-light opacity-70">Plus</p>
              <span className="text-xs font-semibold bg-violet/30 text-violet-light border border-violet/40 px-2.5 py-1 rounded-full">
                Most Popular
              </span>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-semibold text-snow font-mono-nums">₱99</span>
              <span className="text-snow/40 text-sm">/mo</span>
            </div>
            <p className="text-snow/40 text-sm">Cancel anytime. No lock-in.</p>
          </div>

          <ul className="flex flex-col gap-3 flex-1 mb-8">
            {PLUS_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-snow/80">
                <Check plus />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/pricing#checkout"
            className="block text-center px-6 py-3 bg-violet text-white font-semibold text-sm rounded-xl hover:bg-violet-dark transition-all duration-200 hover:shadow-lg hover:shadow-violet/30"
          >
            Get Plus — ₱99/mo
          </Link>
        </div>
      </div>
    </div>
  );
}
