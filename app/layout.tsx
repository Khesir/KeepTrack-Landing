import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? 'https://keeptrack.app'),
  title: 'Keep Track — Your personal money, planned.',
  description: 'Budget every month, save with purpose, and stay on top of what you owe — all in one place. Free forever, with optional cloud sync and AI features.',
  openGraph: {
    title: 'Keep Track',
    description: 'Your personal money, planned.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
