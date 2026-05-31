import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Status = 'done' | 'in-progress' | 'planned';

type RoadmapItem = {
  title: string;
  desc: string;
  status: Status;
  category: string;
};

const ROADMAP: { quarter: string; items: RoadmapItem[] }[] = [
  {
    quarter: 'Shipped',
    items: [
      { title: 'Monthly budgeting', desc: 'Plan income and expenses by category before the month begins.', status: 'done', category: 'Finance' },
      { title: 'Savings wallets', desc: 'Named buckets with deposit, withdrawal, and full history.', status: 'done', category: 'Finance' },
      { title: 'Debt & receivables tracking', desc: 'Track what you owe and what others owe you with repayment logs.', status: 'done', category: 'Finance' },
      { title: 'Planned payments', desc: 'Schedule recurring bills before they arrive.', status: 'done', category: 'Finance' },
      { title: 'Subscription tracking', desc: 'All recurring subscriptions in one list with next billing dates.', status: 'done', category: 'Finance' },
      { title: 'Budget profiles', desc: 'Multiple budget plans running side by side.', status: 'done', category: 'Finance' },
      { title: 'Local backup & restore', desc: 'Encrypted .ktbak export and import — fully offline.', status: 'done', category: 'Sync' },
      { title: 'Cloud backup', desc: 'One-tap encrypted backup to the cloud via your account.', status: 'done', category: 'Sync' },
      { title: 'Windows & Android support', desc: 'Native apps on both platforms.', status: 'done', category: 'Platform' },
      { title: 'Light & dark mode', desc: 'Full theming with system preference detection.', status: 'done', category: 'UI' },
    ],
  },
  {
    quarter: 'In Progress',
    items: [
      { title: 'Keep Track Plus subscription', desc: 'Monthly subscription for cloud sync and AI features at ₱99/mo.', status: 'in-progress', category: 'Product' },
      { title: 'AI receipt parser', desc: 'Describe a transaction in plain text and let AI log it for you.', status: 'in-progress', category: 'AI' },
      { title: 'AI image upload', desc: 'Snap a photo of a receipt — AI reads and logs the transaction.', status: 'in-progress', category: 'AI' },
      { title: 'AI monthly analytics', desc: 'Smart spending breakdown and insights generated at month end.', status: 'in-progress', category: 'AI' },
    ],
  },
  {
    quarter: 'Planned',
    items: [
      { title: 'Multi-device cloud sync', desc: 'Real-time sync across all your devices using your account.', status: 'planned', category: 'Sync' },
      { title: 'iOS support', desc: 'Native iPhone and iPad app.', status: 'planned', category: 'Platform' },
      { title: 'Financial goals with AI projection', desc: 'AI-estimated goal completion timelines based on your saving rate.', status: 'planned', category: 'AI' },
      { title: 'Paycheck planning', desc: 'Allocate your income to categories before you start spending.', status: 'planned', category: 'Finance' },
      { title: 'Pomodoro with finance mode', desc: 'Focus sessions tied to financial tasks and review prompts.', status: 'planned', category: 'Productivity' },
    ],
  },
];

const STATUS_CONFIG: Record<Status, { label: string; dot: string; badge: string }> = {
  done: {
    label: 'Done',
    dot: 'bg-success',
    badge: 'bg-success/12 text-success border-success/20',
  },
  'in-progress': {
    label: 'In Progress',
    dot: 'bg-violet',
    badge: 'bg-violet/12 text-violet border-violet/20',
  },
  planned: {
    label: 'Planned',
    dot: 'bg-ash',
    badge: 'bg-snow-2 text-wolf-gray border-ash',
  },
};

export default function RoadmapPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-snow pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-violet mb-3">Roadmap</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-midnight tracking-tight mb-3">
              What we're building
            </h1>
            <p className="text-wolf-gray text-base max-w-lg leading-relaxed">
              A transparent look at what's shipped, what's actively being built, and what's coming next.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-14">
            {Object.entries(STATUS_CONFIG).map(([key, val]) => (
              <div key={key} className={`flex items-center gap-2 px-3 py-1.5 border rounded-full text-xs font-medium ${val.badge}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${val.dot}`} />
                {val.label}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-14">
            {ROADMAP.map((section) => (
              <div key={section.quarter}>
                <h2 className="text-base font-semibold text-midnight mb-5 flex items-center gap-3">
                  {section.quarter}
                  <span className="h-px flex-1 bg-ash" />
                </h2>
                <div className="flex flex-col gap-3">
                  {section.items.map((item) => {
                    const cfg = STATUS_CONFIG[item.status];
                    return (
                      <div
                        key={item.title}
                        className="bg-surface border border-ash rounded-2xl px-6 py-5 flex items-start gap-4 hover:border-ash-light hover:shadow-sm transition-all duration-200"
                      >
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${cfg.dot}`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-semibold text-midnight text-sm">{item.title}</span>
                            <span className={`text-xs font-medium px-2 py-0.5 border rounded-full ${cfg.badge}`}>
                              {item.category}
                            </span>
                          </div>
                          <p className="text-wolf-gray text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-midnight rounded-2xl p-8 text-center relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(83,74,183,0.2) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-snow mb-2">Have a feature request?</h3>
              <p className="text-snow/45 text-sm mb-6">
                Support the project on Ko-fi and leave a note — I read every message.
              </p>
              <a
                href="https://ko-fi.com/khesirr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5E5B] text-white font-semibold text-sm rounded-xl hover:bg-[#e54d4a] transition-colors"
              >
                Support on Ko-fi
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
