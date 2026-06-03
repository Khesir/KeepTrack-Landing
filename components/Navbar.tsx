'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Announcements', href: '/announcements' },
  { label: 'Support', href: '/support' },
  { label: 'Download', href: '/download' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-snow/95 backdrop-blur-md border-b border-ash/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-midnight rounded-lg flex items-center justify-center">
            <span className="text-snow text-sm font-bold">KT</span>
          </div>
          <span
            className={`font-semibold text-base tracking-tight transition-colors ${
              scrolled ? 'text-midnight' : 'text-snow'
            }`}
          >
            Keep Track
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-wolf-gray hover:text-midnight hover:bg-snow-2'
                  : 'text-snow/70 hover:text-snow hover:bg-white/10'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/download"
            className={`text-sm font-medium transition-colors ${
              scrolled ? 'text-wolf-gray hover:text-midnight' : 'text-snow/70 hover:text-snow'
            }`}
          >
            Download Free
          </Link>
          <span className="px-4 py-2 bg-violet/20 text-violet/60 text-sm font-medium rounded-lg cursor-not-allowed select-none">
            Plus — Coming Soon
          </span>
        </div>

        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-midnight' : 'text-snow'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-snow border-b border-ash">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-wolf-gray hover:text-midnight hover:bg-snow-2 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-ash flex flex-col gap-2">
              <Link
                href="/download"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-midnight border border-ash rounded-lg text-center hover:bg-snow-2 transition-colors"
              >
                Download Free
              </Link>
              <span className="px-4 py-2.5 text-sm font-medium bg-violet/15 text-violet/50 rounded-lg text-center cursor-not-allowed select-none">
                Plus — Coming Soon
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
