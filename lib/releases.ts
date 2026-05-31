export type Release = {
  id: string;
  version: string;
  title: string;
  body: string;
  exeUrl?: string;
  apkUrl?: string;
  dmgUrl?: string;
  published: boolean;
  publishedAt?: string;
};

const BACKEND_URL = process.env.BACKEND_URL;

export async function getReleases(): Promise<Release[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/releases`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function getLatestRelease(): Promise<Release | null> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/releases/latest`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
