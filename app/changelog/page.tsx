import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getReleases } from '@/lib/releases';

export default async function ChangelogPage() {
  const releases = await getReleases();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-snow pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-violet mb-3">Changelog</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-midnight tracking-tight mb-3">
              What's new
            </h1>
            <p className="text-wolf-gray text-base">
              Release notes for every version of Keep Track.
            </p>
          </div>

          {releases.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-wolf-gray text-sm">No releases published yet.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-0">
              {releases.map((release, i) => (
                <div key={release.id} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-violet mt-1.5 flex-shrink-0" />
                    {i < releases.length - 1 && (
                      <div className="w-px flex-1 bg-ash mt-2" />
                    )}
                  </div>

                  <div className="pb-12 flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="font-mono-nums font-semibold text-midnight text-sm bg-snow-2 border border-ash px-2.5 py-1 rounded-lg">
                        {release.version}
                      </span>
                      {release.publishedAt && (
                        <span className="text-wolf-gray text-xs">
                          {new Date(release.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                      )}
                      {i === 0 && (
                        <span className="text-xs font-semibold bg-violet/15 text-violet border border-violet/25 px-2.5 py-1 rounded-full">
                          Latest
                        </span>
                      )}
                    </div>

                    <h2 className="text-lg font-semibold text-midnight mb-3">{release.title}</h2>

                    <div className="prose-sm text-wolf-gray leading-relaxed whitespace-pre-line">
                      {release.body}
                    </div>

                    {(release.apkUrl || release.exeUrl || release.dmgUrl) && (
                      <div className="flex flex-wrap gap-2 mt-5">
                        {release.apkUrl && (
                          <a
                            href={release.apkUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-midnight text-snow text-xs font-medium rounded-lg hover:bg-midnight-soft transition-colors"
                          >
                            🤖 Android
                          </a>
                        )}
                        {release.exeUrl && (
                          <a
                            href={release.exeUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-midnight text-snow text-xs font-medium rounded-lg hover:bg-midnight-soft transition-colors"
                          >
                            🪟 Windows
                          </a>
                        )}
                        {release.dmgUrl && (
                          <a
                            href={release.dmgUrl}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-midnight text-snow text-xs font-medium rounded-lg hover:bg-midnight-soft transition-colors"
                          >
                            🍏 macOS
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
