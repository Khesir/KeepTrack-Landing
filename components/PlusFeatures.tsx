import Link from 'next/link';
import { ReceiptIcon, CameraIcon, AnalyticsIcon, CloudIcon } from './Icons';

const AI_FEATURES = [
  {
    Icon: ReceiptIcon,
    title: 'AI Receipt Scanner',
    desc: 'Snap a photo of any receipt. Keep Track reads it and logs the transaction automatically.',
  },
  {
    Icon: CameraIcon,
    title: 'AI Image Upload',
    desc: 'Upload images of bills, statements, or handwritten notes. AI extracts the relevant data.',
  },
  {
    Icon: AnalyticsIcon,
    title: 'AI Monthly Analytics',
    desc: 'Get a smart breakdown of your spending patterns, overspend alerts, and insights at month end.',
  },
  {
    Icon: CloudIcon,
    title: 'Cloud Sync',
    desc: 'Your data, everywhere. Seamlessly sync across all your devices in real time.',
  },
];

export default function PlusFeatures() {
  return (
    <section className="bg-midnight py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(241,239,232,0.04) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(83,74,183,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">
          <div className="lg:w-2/5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet/20 border border-violet/30 rounded-full text-violet-light text-xs font-semibold mb-6">
              Keep Track Plus
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-snow tracking-tight mb-5 text-balance">
              Supercharge your finances with AI
            </h2>
            <p className="text-snow/50 text-base leading-relaxed mb-8">
              Plus gives you cloud sync and AI-powered tools that turn your raw spending data into clear, actionable insight — all for less than a coffee a month.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <span className="px-6 py-3 bg-violet/20 text-violet/50 font-semibold text-sm rounded-xl cursor-not-allowed select-none text-center">
                Coming Soon
              </span>
              <Link
                href="/pricing"
                className="px-6 py-3 border border-white/15 text-snow/60 font-medium text-sm rounded-xl hover:bg-white/8 hover:text-snow transition-all duration-200 text-center"
              >
                Compare plans
              </Link>
            </div>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {AI_FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-violet/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-violet/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet/30 transition-colors duration-200">
                  <f.Icon className="w-5 h-5 text-violet-light" />
                </div>
                <h3 className="font-semibold text-snow text-sm mb-2">{f.title}</h3>
                <p className="text-snow/45 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
