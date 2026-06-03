export type AnnouncementType = 'info' | 'warning' | 'release' | 'update';

export type Announcement = {
  _id: string;
  title: string;
  body: string;
  type: AnnouncementType;
  ctaLabel?: string;
  ctaUrl?: string;
  published: boolean;
  publishedAt?: string;
};

const BACKEND_URL = process.env.BACKEND_URL;

export async function getAnnouncements(): Promise<Announcement[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/announcements`, {
      cache: 'no-store',
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
