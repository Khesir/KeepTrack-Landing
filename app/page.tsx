import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import { AndroidIcon, WindowsIcon } from '@/components/Icons';
import Features from '@/components/Features';
import PlusFeatures from '@/components/PlusFeatures';
import PricingCards from '@/components/PricingCards';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PlusFeatures />

      <section className="bg-snow py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-violet mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-midnight tracking-tight mb-4 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-wolf-gray text-base mb-14 max-w-md mx-auto">
            Start free. Upgrade when you want more.
          </p>
          <PricingCards />
        </div>
      </section>

      <section className="bg-surface py-20 px-6 border-y border-ash">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-wolf-gray mb-3">Platforms</p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-midnight tracking-tight mb-12">
            Available on Windows & Android
          </h2>
          <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
            {[
              { Icon: AndroidIcon, name: 'Android', sub: '8.0 and above' },
              { Icon: WindowsIcon, name: 'Windows', sub: 'Windows 10+' },
            ].map((p) => (
              <div
                key={p.name}
                className="bg-snow border border-ash rounded-2xl p-6 flex flex-col items-center gap-3"
              >
                <p.Icon className="w-8 h-8 text-midnight" />
                <span className="font-semibold text-midnight text-sm">{p.name}</span>
                <span className="text-wolf-gray text-xs">{p.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-midnight py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(241,239,232,0.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-snow tracking-tight mb-4 text-balance">
            Ready to take control of your money?
          </h2>
          <p className="text-snow/45 text-base mb-10 leading-relaxed">
            Download free and start planning today. No account needed to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/download"
              className="w-full sm:w-auto px-8 py-3.5 bg-violet text-white font-semibold text-sm rounded-xl hover:bg-violet-dark transition-all duration-200 hover:shadow-lg hover:shadow-violet/30"
            >
              Download Free
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-3.5 border border-white/15 text-snow/70 font-medium text-sm rounded-xl hover:bg-white/8 hover:text-snow transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
