import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getLatestRelease } from '@/lib/releases';
import { AndroidIcon, WindowsIcon } from '@/components/Icons';

const PLATFORMS = [
  {
    Icon: AndroidIcon,
    name: 'Android',
    sub: 'Android 8.0 and above · ARM64 / ARMv7',
    urlKey: 'apkUrl' as const,
    ext: '.apk',
    instructions: [
      'Download the .apk file',
      'Settings → Apps → Special app access → Install unknown apps → allow your browser',
      'Tap the downloaded .apk and follow the prompts',
      'Open Keep Track from your app drawer',
    ],
  },
  {
    Icon: WindowsIcon,
    name: 'Windows',
    sub: 'Windows 10 (64-bit) and above · 4 GB RAM',
    urlKey: 'exeUrl' as const,
    ext: '.exe',
    instructions: [
      'Download the .exe installer',
      'If SmartScreen appears, click More info → Run anyway',
      'Follow the setup wizard',
      'Launch Keep Track from the Start Menu',
    ],
  },
];

export default async function DownloadPage() {
  const latest = await getLatestRelease();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-snow pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-violet mb-3">Download</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-midnight tracking-tight mb-3">
              Get Keep Track
            </h1>
            {latest ? (
              <p className="text-wolf-gray text-base">
                Latest release:{' '}
                <span className="font-semibold text-midnight">{latest.version}</span>
                {latest.publishedAt && (
                  <span className="text-wolf-gray font-normal">
                    {' '}· {new Date(latest.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                )}
              </p>
            ) : (
              <p className="text-wolf-gray text-base">Free forever. No account required to get started.</p>
            )}
          </div>

          {latest && (latest.apkUrl || latest.exeUrl || latest.dmgUrl) && (
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {latest.apkUrl && (
                <a
                  href={latest.apkUrl}
                  className="flex items-center gap-2 px-5 py-3 bg-midnight text-snow font-semibold text-sm rounded-xl hover:bg-midnight-soft transition-colors"
                >
                  🤖 Android (.apk)
                  <DownloadIcon />
                </a>
              )}
              {latest.exeUrl && (
                <a
                  href={latest.exeUrl}
                  className="flex items-center gap-2 px-5 py-3 bg-midnight text-snow font-semibold text-sm rounded-xl hover:bg-midnight-soft transition-colors"
                >
                  🪟 Windows (.exe)
                  <DownloadIcon />
                </a>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
            {PLATFORMS.map((p) => {
              const url = p.urlKey ? latest?.[p.urlKey] : null;
              return (
                <div key={p.name} className="bg-surface border border-ash rounded-2xl p-7 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-snow rounded-xl flex items-center justify-center flex-shrink-0">
                      <p.Icon className="w-6 h-6 text-midnight" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-midnight text-base">{p.name}</h2>
                      <p className="text-wolf-gray text-xs mt-0.5">{p.sub}</p>
                    </div>
                  </div>

                  {p.ext ? (
                    url ? (
                      <a
                        href={url}
                        className="flex items-center justify-center gap-2 px-5 py-2.5 bg-midnight text-snow font-semibold text-sm rounded-xl hover:bg-midnight-soft transition-colors"
                      >
                        Download {p.ext}
                        <DownloadIcon />
                      </a>
                    ) : (
                      <div className="px-5 py-2.5 bg-snow-2 border border-ash text-wolf-gray font-medium text-sm rounded-xl text-center">
                        Not yet available
                      </div>
                    )
                  ) : (
                    <div className="px-5 py-2.5 bg-snow-2 border border-ash text-wolf-gray font-medium text-sm rounded-xl text-center">
                      Coming Soon
                    </div>
                  )}

                  {p.instructions.length > 0 && (
                    <ol className="flex flex-col gap-2 pt-2 border-t border-ash">
                      {p.instructions.map((step, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-wolf-gray">
                          <span
                            className="w-4 h-4 bg-snow-2 border border-ash rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-midnight mt-0.5"
                            style={{ fontSize: 10 }}
                          >
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-midnight rounded-2xl p-8 text-center relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(83,74,183,0.2) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-snow mb-2">Want cloud sync and AI features?</h3>
              <p className="text-snow/45 text-sm mb-6">Upgrade to Keep Track Plus for ₱99/mo.</p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 bg-violet text-white font-semibold text-sm rounded-xl hover:bg-violet-dark transition-colors"
              >
                See Plus Plans →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
      <path d="M8 2v9m0 0L5 8m3 3 3-3M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
