import { BudgetIcon, TransactionIcon, WalletIcon, GoalIcon, DebtIcon, SubscriptionIcon, CalendarIcon, ProfileIcon } from './Icons';

const FEATURES = [
  {
    Icon: BudgetIcon,
    title: 'Monthly Budgets',
    desc: 'Plan your income and expenses before the month begins. Group categories your way and watch actuals fill in as you spend.',
  },
  {
    Icon: TransactionIcon,
    title: 'Inflow & Outflow',
    desc: 'Track every peso in and out. Log salary, freelance income, and everyday expenses against your budget.',
  },
  {
    Icon: WalletIcon,
    title: 'Savings Wallets',
    desc: 'Create named buckets for the things that matter — emergency fund, travel, a new laptop. Full history per wallet.',
  },
  {
    Icon: GoalIcon,
    title: 'Financial Goals',
    desc: 'Set a target amount and a deadline. Track your monthly contribution progress toward big milestones.',
  },
  {
    Icon: DebtIcon,
    title: 'Debts & Receivables',
    desc: 'Know exactly what you owe and what others owe you. Track repayments and see obligations in both directions.',
  },
  {
    Icon: SubscriptionIcon,
    title: 'Subscriptions',
    desc: 'All your recurring subscriptions in one list — with next billing dates and monthly cost equivalents.',
  },
  {
    Icon: CalendarIcon,
    title: 'Planned Payments',
    desc: 'Schedule upcoming bills before they arrive. Electricity, internet, insurance — never be caught off guard.',
  },
  {
    Icon: ProfileIcon,
    title: 'Budget Profiles',
    desc: 'Run separate budget plans side by side. Keep personal and freelance finances in their own spaces.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-snow py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-violet mb-3">Features</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-midnight tracking-tight text-balance">
            Built for people who take their money seriously
          </h2>
          <p className="mt-4 text-wolf-gray text-base max-w-xl mx-auto leading-relaxed">
            Not just an expense tracker — a full monthly budgeting system for individuals who want to plan before they spend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-surface border border-ash rounded-2xl p-6 hover:border-ash-light hover:shadow-md transition-all duration-200 group"
            >
              <div className="w-10 h-10 bg-snow rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                <f.Icon className="w-5 h-5 text-midnight" />
              </div>
              <h3 className="font-semibold text-midnight text-sm mb-2">{f.title}</h3>
              <p className="text-wolf-gray text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
