import { BudgetIcon, TransactionIcon, WalletIcon, GoalIcon, DebtIcon, SubscriptionIcon, CalendarIcon, ProfileIcon, CalendarIcon as TaskIcon } from './Icons';

const SCREENSHOTS = [
  {
    Icon: BudgetIcon,
    title: 'Monthly Budgets',
    desc: 'Plan income and expenses before the month begins.',
    gradient: 'from-violet/30 to-violet/10',
    aspect: 'aspect-[16/9]',
    device: 'Desktop',
    image: '/screenshots/budget.png',
  },
  {
    Icon: TransactionIcon,
    title: 'Inflow & Outflow',
    desc: 'Track every peso in and out against your budget.',
    gradient: 'from-blue-500/20 to-blue-400/10',
    aspect: 'aspect-[3/4]',
    device: 'Mobile',
    image: '/screenshots/transactions.png',
  },
  {
    Icon: WalletIcon,
    title: 'Savings Wallets',
    desc: 'Named buckets for everything that matters — emergency, travel, gadgets.',
    gradient: 'from-success/20 to-success/8',
    aspect: 'aspect-[4/3]',
    device: 'Tablet',
    image: '/screenshots/savings.png',
  },
  {
    Icon: GoalIcon,
    title: 'Financial Goals',
    desc: 'Set targets and deadlines. Watch your monthly contributions add up.',
    gradient: 'from-orange-400/20 to-orange-300/8',
    aspect: 'aspect-[3/4]',
    device: 'Mobile',
    image: '/screenshots/goals.png',
  },
  {
    Icon: TaskIcon,
    title: 'Tasks',
    desc: 'Manage your to-dos alongside your finances — all in one app.',
    gradient: 'from-indigo-500/20 to-indigo-400/8',
    aspect: 'aspect-[16/9]',
    device: 'Desktop',
    image: '/screenshots/tasks.png',
  },
  {
    Icon: DebtIcon,
    title: 'Debts & Receivables',
    desc: 'Know exactly what you owe and what others owe you.',
    gradient: 'from-red-400/20 to-red-300/8',
    aspect: 'aspect-[4/3]',
    device: 'Tablet',
    image: '/screenshots/debts.png',
  },
  {
    Icon: SubscriptionIcon,
    title: 'Subscriptions',
    desc: 'All recurring subscriptions in one list with next billing dates.',
    gradient: 'from-pink-400/20 to-pink-300/8',
    aspect: 'aspect-[16/9]',
    device: 'Desktop',
    image: '/screenshots/subscriptions.png',
  },
  {
    Icon: CalendarIcon,
    title: 'Planned Payments',
    desc: 'Schedule upcoming bills so you\'re never caught off guard.',
    gradient: 'from-teal-500/20 to-teal-400/8',
    aspect: 'aspect-[3/4]',
    device: 'Mobile',
    image: '/screenshots/planned.png',
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

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {SCREENSHOTS.map((item) => (
            <div
              key={item.title}
              className="break-inside-avoid mb-5 rounded-2xl overflow-hidden border border-ash bg-surface group"
            >
              <div className={`relative ${item.aspect} bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  <item.Icon className="w-16 h-16 text-midnight" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs font-mono text-midnight/40 bg-midnight/8 px-2 py-1 rounded-md">
                    {item.device} screenshot
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-midnight text-sm mb-1.5">{item.title}</h3>
                <p className="text-wolf-gray text-xs leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
