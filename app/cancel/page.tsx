import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CancelPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-snow flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center py-24">
          <div className="w-16 h-16 bg-snow-2 border border-ash rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-wolf-gray" fill="none" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="text-3xl font-semibold text-midnight mb-3 tracking-tight">
            Payment cancelled
          </h1>
          <p className="text-wolf-gray text-base leading-relaxed mb-8">
            No charge was made. You can try again anytime or continue using Keep Track for free.
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/pricing#checkout"
              className="px-6 py-3 bg-violet text-white font-semibold text-sm rounded-xl hover:bg-violet-dark transition-colors"
            >
              Try Again
            </Link>
            <Link
              href="/"
              className="px-6 py-3 border border-ash text-midnight font-medium text-sm rounded-xl hover:bg-snow-2 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
