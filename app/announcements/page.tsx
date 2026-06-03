import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getAnnouncements, AnnouncementType } from '@/lib/announcements';
import ReactMarkdown from 'react-markdown';

const typeBadge: Record<AnnouncementType, { label: string; classes: string }> = {
  info:    { label: 'Info',    classes: 'bg-violet/10 text-violet border-violet/20' },
  warning: { label: 'Warning', classes: 'bg-error/10 text-error border-error/20' },
  release: { label: 'Release', classes: 'bg-success/10 text-success border-success/20' },
  update:  { label: 'Update',  classes: 'bg-midnight/8 text-midnight border-ash' },
};

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-snow pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-violet mb-3">Announcements</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-midnight tracking-tight mb-3">
              What's new
            </h1>
            <p className="text-wolf-gray text-base">
              Updates, releases, and news from the Keep Track team.
            </p>
          </div>

          {announcements.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-wolf-gray text-sm">No announcements yet.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-0">
              {announcements.map((item, i) => {
                const badge = typeBadge[item.type] ?? typeBadge.info;
                return (
                  <div key={item._id} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-violet mt-1.5 flex-shrink-0" />
                      {i < announcements.length - 1 && (
                        <div className="w-px flex-1 bg-ash mt-2" />
                      )}
                    </div>

                    <div className="pb-12 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`text-xs font-semibold border px-2.5 py-1 rounded-full ${badge.classes}`}>
                          {badge.label}
                        </span>
                        {item.publishedAt && (
                          <span className="text-wolf-gray text-xs">
                            {new Date(item.publishedAt).toLocaleDateString('en-US', {
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

                      <h2 className="text-lg font-semibold text-midnight mb-3">{item.title}</h2>

                      <div className="text-wolf-gray leading-relaxed [&_p]:mb-3 [&_p:last-child]:mb-0 [&_strong]:font-semibold [&_strong]:text-midnight [&_em]:italic [&_code]:font-mono [&_code]:text-sm [&_code]:bg-ash-light [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-3 [&_li]:mb-1 [&_h1]:text-xl [&_h1]:font-semibold [&_h1]:text-midnight [&_h1]:mb-2 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-midnight [&_h2]:mb-2 [&_h3]:font-semibold [&_h3]:text-midnight [&_h3]:mb-1 [&_blockquote]:border-l-2 [&_blockquote]:border-ash [&_blockquote]:pl-4 [&_blockquote]:italic [&_a]:text-violet [&_a]:underline">
                        <ReactMarkdown>{item.body}</ReactMarkdown>
                      </div>

                      {item.ctaLabel && item.ctaUrl && (
                        <div className="mt-5">
                          <a
                            href={item.ctaUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-violet text-snow text-sm font-medium rounded-lg hover:bg-violet-dark transition-colors"
                          >
                            {item.ctaLabel} →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
