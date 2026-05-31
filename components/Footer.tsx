import Link from 'next/link';
import { KofiIcon } from './Icons';

const LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Roadmap', href: '/roadmap' },
  { label: 'Changelog', href: '/changelog' },
  { label: 'Support', href: '/support' },
  { label: 'Download', href: '/download' },
];

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 bg-snow/10 rounded-lg flex items-center justify-center">
                <span className="text-snow text-xs font-bold">KT</span>
              </div>
              <span className="font-semibold text-snow text-sm">Keep Track</span>
            </div>
            <p className="text-snow/35 text-sm max-w-xs leading-relaxed">
              Your personal money, planned. Free forever with optional cloud sync and AI.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-snow/40 text-sm hover:text-snow/70 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <a
              href="https://ko-fi.com/khesirr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5E5B]/15 border border-[#FF5E5B]/25 rounded-xl text-[#FF5E5B] text-sm font-medium hover:bg-[#FF5E5B]/25 hover:border-[#FF5E5B]/40 transition-all duration-200 w-fit"
            >
              <KofiIcon className="w-4 h-4" />
              Support on Ko-fi
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-snow/25 text-xs">
            © {new Date().getFullYear()} Keep Track. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-snow/25 text-xs hover:text-snow/50 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-snow/25 text-xs hover:text-snow/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
