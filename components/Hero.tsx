import Link from 'next/link';
import { AndroidIcon, WindowsIcon } from './Icons';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-midnight flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(241,239,232,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(83,74,183,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/8 border border-white/12 rounded-full text-snow/60 text-xs font-medium mb-8 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
          Free forever &nbsp;·&nbsp; Plus from ₱99/mo
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-snow leading-[1.08] tracking-tight mb-6 text-balance">
          Your personal money,{' '}
          <span className="text-violet-light opacity-90">planned.</span>
        </h1>

        <p className="text-lg sm:text-xl text-snow/55 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          Budget every month, save with purpose, and stay on top of what you owe —
          all in one place. Works fully offline, forever free.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <Link
            href="/download"
            className="w-full sm:w-auto px-7 py-3.5 bg-violet text-white font-semibold text-sm rounded-xl hover:bg-violet-dark transition-all duration-200 hover:shadow-lg hover:shadow-violet/25 hover:-translate-y-0.5"
          >
            Download Free
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-7 py-3.5 border border-white/20 text-snow/80 font-medium text-sm rounded-xl hover:bg-white/8 hover:border-white/30 hover:text-snow transition-all duration-200"
          >
            See Plans →
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-1.5 text-snow/40 text-sm">
            <AndroidIcon className="w-4 h-4" />
            Android 8+
          </span>
          <span className="flex items-center gap-1.5 text-snow/40 text-sm">
            <WindowsIcon className="w-4 h-4" />
            Windows 10+
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-snow pointer-events-none" />
    </section>
  );
}
