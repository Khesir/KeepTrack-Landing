export type PlatformStatus = 'available' | 'coming_soon' | 'not_available';

export type WindowsPlatform = {
  status: PlatformStatus;
  downloadUrl?: string;
};

export type AndroidPlatform = {
  status: PlatformStatus;
  apkUrl?: string;
  playStoreUrl?: string;
};

export type StorePlatform = {
  status: PlatformStatus;
  storeUrl?: string;
};

export type ReleasePlatforms = {
  windows: WindowsPlatform;
  android: AndroidPlatform;
  macos: StorePlatform;
  ios: StorePlatform;
};

export type Release = {
  id: string;
  version: string;
  title: string;
  body: string;
  platforms: ReleasePlatforms;
  published: boolean;
  publishedAt?: string;
};

const BACKEND_URL = process.env.BACKEND_URL;

export async function getReleases(): Promise<Release[]> {
  try {
    const res = await fetch(`${BACKEND_URL}/api/v1/releases`, {
      next: { revalidate: 60 },
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
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}
