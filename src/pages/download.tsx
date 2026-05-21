import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Smartphone, Monitor, Laptop, Download as DownloadIcon, ExternalLink } from 'lucide-react';
import styles from './download.module.css';

type Release = { version: string; date: string; exeUrl?: string; apkUrl?: string; exeSize?: string; apkSize?: string };

function useLatestRelease(): Release | null {
  const [release, setRelease] = useState<Release | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/Khesir/KeepTrack/releases/latest')
      .then((r) => r.json())
      .then((data) => {
        const assets = data.assets ?? [];
        const exe = assets.find((a: any) => a.name.endsWith('.exe'));
        const apk = assets.find((a: any) => a.name.endsWith('.apk'));
        setRelease({
          version: data.tag_name ?? '',
          date: data.published_at ? new Date(data.published_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
          exeUrl: exe?.browser_download_url,
          apkUrl: apk?.browser_download_url,
          exeSize: exe ? `${(exe.size / 1024 / 1024).toFixed(1)} MB` : undefined,
          apkSize: apk ? `${(apk.size / 1024 / 1024).toFixed(1)} MB` : undefined,
        });
      })
      .catch(() => {});
  }, []);

  return release;
}

const PLATFORMS = [
  {
    id: 'android',
    Icon: Smartphone,
    name: 'Android',
    min: 'Android 8.0 (Oreo) or later · ARM64 / ARMv7',
    steps: [
      'Download the .apk file below',
      'On your device: Settings → Apps → Special app access → Install unknown apps → allow your browser',
      'Tap the downloaded .apk and follow the prompts',
      'Open Keep Track from your app drawer',
    ],
  },
  {
    id: 'ios',
    Icon: Smartphone,
    name: 'iOS',
    min: 'iOS 14.0 or later · iPhone 6s or newer',
    steps: ['Coming to the App Store — stay tuned for the release.'],
    comingSoon: true,
  },
  {
    id: 'windows',
    Icon: Monitor,
    name: 'Windows',
    min: 'Windows 10 64-bit or later · 4 GB RAM · 500 MB storage',
    steps: [
      'Download the .exe installer below',
      'Run the file — click More info → Run anyway if SmartScreen appears',
      'Follow the setup wizard',
      'Launch Keep Track from the Start Menu or desktop shortcut',
    ],
  },
  {
    id: 'macos',
    Icon: Laptop,
    name: 'macOS',
    min: 'macOS 12 Monterey or later · Apple Silicon or Intel',
    steps: [
      'Download the .dmg file below',
      'Open the disk image and drag Keep Track to Applications',
      'Right-click the app → Open on first launch (required to bypass Gatekeeper)',
      'Sign in or create your account',
    ],
  },
];

export default function Download(): React.ReactElement {
  const release = useLatestRelease();

  return (
    <Layout
      title="Download"
      description="Download Keep Track for Android, iOS, Windows, or macOS."
    >
      <main className={styles.page}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerInner}>
            <span className={styles.headerLabel}>Free Download</span>
            <h1 className={styles.headerTitle}>Get Keep Track</h1>
            <p className={styles.headerSub}>
              Available on Android, iOS, Windows, and macOS.{' '}
              {release?.version && (
                <span className={styles.releaseBadge}>
                  Latest: {release.version}
                  {release.date && ` · ${release.date}`}
                </span>
              )}
            </p>
            <div className={styles.downloadRow}>
              {release?.apkUrl && (
                <a href={release.apkUrl} className={styles.downloadBtn}>
                  <Smartphone size={16} /> Download for Android
                  {release.apkSize && <span className={styles.dlSize}>{release.apkSize}</span>}
                </a>
              )}
              {release?.exeUrl && (
                <a href={release.exeUrl} className={styles.downloadBtn}>
                  <Monitor size={16} /> Download for Windows
                  {release.exeSize && <span className={styles.dlSize}>{release.exeSize}</span>}
                </a>
              )}
              {!release && (
                <a href="https://github.com/Khesir/KeepTrack/releases/latest" className={styles.downloadBtn}>
                  <ExternalLink size={16} /> View latest release on GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Platform guides */}
        <div className={styles.platforms}>
          <div className={styles.platformsInner}>
            <h2 className={styles.platformsTitle}>Installation by Platform</h2>
            <div className={styles.platformGrid}>
              {PLATFORMS.map((p) => (
                <div key={p.id} className={`${styles.platformCard} ${p.comingSoon ? styles.platformCardMuted : ''}`}>
                  <div className={styles.platformIcon}><p.Icon size={28} /></div>
                  <h3 className={styles.platformName}>{p.name}</h3>
                  <p className={styles.platformMin}>{p.min}</p>
                  {p.comingSoon ? (
                    <span className={styles.comingSoonBadge}>Coming Soon</span>
                  ) : (
                    <ol className={styles.platformSteps}>
                      {p.steps.map((s, i) => <li key={i}>{s}</li>)}
                    </ol>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* First time setup */}
        <div className={styles.setup}>
          <div className={styles.setupInner}>
            <h2 className={styles.setupTitle}>First Time Setup</h2>
            <div className={styles.setupSteps}>
              {[
                ['1', 'Create your account', 'Sign up with email or continue with Google.'],
                ['2', 'Set your currency', 'Settings → Currency — pick your local currency.'],
                ['3', 'Plan your first month', 'Budget tab → current month → Add Budget Group.'],
                ['4', 'Log a transaction', 'Tap + anywhere in the app and fill in the details.'],
                ['5', 'Set up savings wallets', 'Savings tab → New Bucket — name it and set a balance.'],
              ].map(([num, title, desc]) => (
                <div key={num} className={styles.setupStep}>
                  <div className={styles.setupNum}>{num}</div>
                  <div>
                    <div className={styles.setupStepTitle}>{title}</div>
                    <div className={styles.setupStepDesc}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className={styles.setupFooter}>
              Need more detail? Read the <Link to="/docs/quickstart">Quick Start guide</Link>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
