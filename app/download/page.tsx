import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getLatestRelease, PlatformStatus } from '@/lib/releases';
import { AndroidIcon, WindowsIcon, PlayStoreIcon, AppleIcon } from '@/components/Icons';

function StatusButton({
  status,
  availableContent,
}: {
  status: PlatformStatus;
  availableContent: React.ReactNode;
}) {
  if (status === 'available') return <>{availableContent}</>;
  if (status === 'coming_soon') {
    return (
      <div className="px-5 py-2.5 bg-violet/8 border border-violet/15 text-violet/60 font-medium text-sm rounded-xl text-center">
        Coming Soon
      </div>
    );
  }
  return (
    <div className="px-5 py-2.5 bg-snow-2 border border-ash text-wolf-gray font-medium text-sm rounded-xl text-center">
      Not available for this version
    </div>
  );
}

export default async function DownloadPage() {
  const latest = await getLatestRelease();
  const p = latest?.platforms;

  const windowsAvailable = p?.windows.status === 'available' && p.windows.downloadUrl;
  const androidAvailable = p?.android.status === 'available' && p.android.apkUrl;

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
                    {' '}·{' '}
                    {new Date(latest.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                )}
              </p>
            ) : (
              <p className="text-wolf-gray text-base">Free forever. No account required to get started.</p>
            )}
          </div>

          {(windowsAvailable || androidAvailable) && (
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {androidAvailable && (
                <a
                  href={p!.android.apkUrl}
                  className="flex items-center gap-2 px-5 py-3 bg-midnight text-snow font-semibold text-sm rounded-xl hover:bg-midnight-soft transition-colors"
                >
                  🤖 Android (.apk)
                  <DownloadIcon />
                </a>
              )}
              {windowsAvailable && (
                <a
                  href={p!.windows.downloadUrl}
                  className="flex items-center gap-2 px-5 py-3 bg-midnight text-snow font-semibold text-sm rounded-xl hover:bg-midnight-soft transition-colors"
                >
                  🪟 Windows (.exe)
                  <DownloadIcon />
                </a>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
            {/* Android */}
            <div className="bg-surface border border-ash rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-snow rounded-xl flex items-center justify-center flex-shrink-0">
                  <AndroidIcon className="w-6 h-6 text-midnight" />
                </div>
                <div>
                  <h2 className="font-semibold text-midnight text-base">Android</h2>
                  <p className="text-wolf-gray text-xs mt-0.5">Android 8.0 and above · ARM64 / ARMv7</p>
                </div>
              </div>

              <StatusButton
                status={p?.android.status ?? 'coming_soon'}
                availableContent={
                  <a
                    href={p?.android.apkUrl}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-midnight text-snow font-semibold text-sm rounded-xl hover:bg-midnight-soft transition-colors"
                  >
                    Download .apk
                    <DownloadIcon />
                  </a>
                }
              />

              {p?.android.status === 'available' && p.android.playStoreUrl ? (
                <a
                  href={p.android.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-3 bg-[#01875F]/8 border border-[#01875F]/20 rounded-xl hover:bg-[#01875F]/12 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <PlayStoreIcon className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-midnight leading-tight">Google Play</p>
                      <p className="text-xs text-wolf-gray leading-tight">Available now</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-[#01875F]/10 text-[#01875F] border border-[#01875F]/20 px-2.5 py-1 rounded-full">
                    Get it
                  </span>
                </a>
              ) : (
                <div className="flex items-center justify-between px-4 py-3 bg-snow-2 border border-ash rounded-xl">
                  <div className="flex items-center gap-3">
                    <PlayStoreIcon className="w-5 h-5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-midnight leading-tight">Google Play</p>
                      <p className="text-xs text-wolf-gray leading-tight">Coming soon</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-violet/10 text-violet border border-violet/20 px-2.5 py-1 rounded-full">
                    Soon
                  </span>
                </div>
              )}

              <ol className="flex flex-col gap-2 pt-2 border-t border-ash">
                {[
                  'Download the .apk file',
                  'Settings → Apps → Special app access → Install unknown apps → allow your browser',
                  'Tap the downloaded .apk and follow the prompts',
                  'Open Keep Track from your app drawer',
                ].map((step, i) => (
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
            </div>

            {/* Windows */}
            <div className="bg-surface border border-ash rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-snow rounded-xl flex items-center justify-center flex-shrink-0">
                  <WindowsIcon className="w-6 h-6 text-midnight" />
                </div>
                <div>
                  <h2 className="font-semibold text-midnight text-base">Windows</h2>
                  <p className="text-wolf-gray text-xs mt-0.5">Windows 10 (64-bit) and above · 4 GB RAM</p>
                </div>
              </div>

              <StatusButton
                status={p?.windows.status ?? 'coming_soon'}
                availableContent={
                  <a
                    href={p?.windows.downloadUrl}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-midnight text-snow font-semibold text-sm rounded-xl hover:bg-midnight-soft transition-colors"
                  >
                    Download .exe
                    <DownloadIcon />
                  </a>
                }
              />

              <ol className="flex flex-col gap-2 pt-2 border-t border-ash">
                {[
                  'Download the .exe installer',
                  'If SmartScreen appears, click More info → Run anyway',
                  'Follow the setup wizard',
                  'Launch Keep Track from the Start Menu',
                ].map((step, i) => (
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
            </div>

            {/* iOS */}
            <div className="bg-surface border border-ash rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-snow rounded-xl flex items-center justify-center flex-shrink-0">
                  <AppleIcon className="w-6 h-6 text-midnight" />
                </div>
                <div>
                  <h2 className="font-semibold text-midnight text-base">iOS</h2>
                  <p className="text-wolf-gray text-xs mt-0.5">iPhone · iOS 16 and above</p>
                </div>
              </div>

              <StatusButton
                status={p?.ios.status ?? 'coming_soon'}
                availableContent={
                  <a
                    href={p?.ios.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-midnight text-snow font-semibold text-sm rounded-xl hover:bg-midnight-soft transition-colors"
                  >
                    View on App Store
                  </a>
                }
              />
            </div>

            {/* macOS */}
            <div className="bg-surface border border-ash rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-snow rounded-xl flex items-center justify-center flex-shrink-0">
                  <AppleIcon className="w-6 h-6 text-midnight" />
                </div>
                <div>
                  <h2 className="font-semibold text-midnight text-base">macOS</h2>
                  <p className="text-wolf-gray text-xs mt-0.5">macOS 13 Ventura and above</p>
                </div>
              </div>

              <StatusButton
                status={p?.macos.status ?? 'coming_soon'}
                availableContent={
                  <a
                    href={p?.macos.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-midnight text-snow font-semibold text-sm rounded-xl hover:bg-midnight-soft transition-colors"
                  >
                    View on Mac App Store
                  </a>
                }
              />
            </div>
          </div>

          <div className="bg-midnight rounded-2xl p-8 text-center relative overflow-hidden">
            <div
              className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(83,74,183,0.2) 0%, transparent 70%)' }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-snow mb-2">Want cloud sync and AI features?</h3>
              <p className="text-snow/45 text-sm mb-6">Keep Track Plus is coming soon — stay tuned.</p>
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-violet/20 text-violet-light font-semibold text-sm rounded-xl cursor-not-allowed select-none">
                Coming Soon
              </span>
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
      <path
        d="M8 2v9m0 0L5 8m3 3 3-3M2 13h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
