import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  BarChart3,
  Wallet,
  Target,
  CreditCard,
  ArrowUpDown,
  RefreshCw,
  CalendarDays,
  Layers,
  Moon,
  Smartphone,
  Monitor,
  Laptop,
  Briefcase,
  Code2,
  Flag,
  Download as DownloadIcon,
  ChevronRight,
} from 'lucide-react';
import styles from './index.module.css';

// ── Data ────────────────────────────────────────────────────────────────────

const PLATFORMS = [
  { Icon: Smartphone, name: 'Android',  min: '8.0 and above' },
  { Icon: Smartphone, name: 'iOS',      min: '14 and above' },
  { Icon: Monitor,    name: 'Windows',  min: 'Windows 10+' },
  { Icon: Laptop,     name: 'macOS',    min: 'Monterey and above' },
];

const AUDIENCE = [
  { Icon: Briefcase, title: 'Young Professionals', desc: 'You get a monthly paycheck and want to know exactly where it goes — rent, food, transport, savings — before you spend it.' },
  { Icon: Code2,     title: 'Freelancers',          desc: 'Irregular income, multiple streams. Budget Profiles keep personal finances separate from your side-income cash flow.' },
  { Icon: Flag,      title: 'Anyone with Goals',    desc: 'Paying off a loan, building a safety net, saving for something big — Keep Track gives you the structure to get there.' },
];

// ── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            Personal Budgeting App
          </div>
          <h1 className={styles.heroTitle}>
            Your personal{' '}
            <span className={styles.heroTitleAccent}>money</span>
            ,<br />planned.
          </h1>
          <p className={styles.heroTagline}>
            Budget every month, save with purpose, and stay on top of what
            you owe — all in one place built for individuals.
          </p>
          <div className={styles.heroActions}>
            <Link to="/download" className={styles.btnPrimary}>
              <DownloadIcon size={16} />
              Download Free
            </Link>
            <Link to="/docs/intro" className={styles.btnSecondary}>
              See what's inside
              <ChevronRight size={16} />
            </Link>
          </div>
          <div className={styles.heroPlatforms}>
            <span className={styles.platformLabel}>Available on</span>
            {PLATFORMS.map((p) => (
              <span key={p.name} className={styles.platformChip}>
                <p.Icon size={12} />
                {p.name}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroImageGlow} />
          <img src="/img/app-icon.svg" alt="Keep Track" />
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.sectionInner}>
        <div className={styles.featuresHeader}>
          <span className={styles.sectionLabel}>Features</span>
          <h2 className={styles.sectionTitle}>
            Everything you need,<br />nothing you don't
          </h2>
          <p className={styles.sectionSubtitle}>
            A full monthly budgeting system — not just expense tracking.
            Plan the month ahead, then watch actuals fill in as you go.
          </p>
        </div>

        <div className={styles.bento}>
          {/* Row 1: Budget (wide) + Wallets (narrow) */}
          <div className={`${styles.bentoCard} ${styles.bentoWide} ${styles.bentoAccentIndigo}`}>
            <div className={styles.bentoCardInner}>
              <div className={`${styles.bentoIcon} ${styles.bentoIconIndigo}`}>
                <BarChart3 size={20} />
              </div>
              <h3 className={styles.bentoTitle}>Monthly Budgets</h3>
              <p className={styles.bentoDesc}>
                Plan your income and expenses before the month begins.
                Create groups for Housing, Food, Transport — with planned amounts.
                Watch actuals fill in against your plan in real time.
              </p>
              <div className={styles.bentoTag}>Core feature</div>
            </div>
            <div className={styles.bentoDeco}>
              <div className={styles.bentoBarGroup}>
                {[60, 85, 45, 70, 55, 90, 40].map((h, i) => (
                  <div key={i} className={styles.bentoBar} style={{ height: `${h}%`, opacity: 0.15 + i * 0.12 }} />
                ))}
              </div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.bentoNarrow} ${styles.bentoAccentGreen}`}>
            <div className={`${styles.bentoIcon} ${styles.bentoIconGreen}`}>
              <Wallet size={20} />
            </div>
            <h3 className={styles.bentoTitle}>Savings Wallets</h3>
            <p className={styles.bentoDesc}>
              Named buckets for everything you're saving toward — emergency fund, travel,
              a new device. Full deposit and withdrawal history per wallet.
            </p>
          </div>

          {/* Row 2: Goals (narrow) + Debts (wide) */}
          <div className={`${styles.bentoCard} ${styles.bentoNarrow} ${styles.bentoAccentAmber}`}>
            <div className={`${styles.bentoIcon} ${styles.bentoIconAmber}`}>
              <Target size={20} />
            </div>
            <h3 className={styles.bentoTitle}>Financial Goals</h3>
            <p className={styles.bentoDesc}>
              Set a target amount and deadline. Track monthly contributions
              and watch progress toward big purchases and milestones.
            </p>
          </div>

          <div className={`${styles.bentoCard} ${styles.bentoWide} ${styles.bentoAccentRose}`}>
            <div className={styles.bentoCardInner}>
              <div className={`${styles.bentoIcon} ${styles.bentoIconRose}`}>
                <CreditCard size={20} />
              </div>
              <h3 className={styles.bentoTitle}>Debts & Receivables</h3>
              <p className={styles.bentoDesc}>
                Know exactly what you owe and what others owe you.
                Log loans, record partial payments, and track remaining
                balances until everything is settled.
              </p>
              <div className={styles.bentoTag}>Two-sided tracking</div>
            </div>
            <div className={styles.bentoDeco}>
              <div className={styles.bentoProgressGroup}>
                {[{ label: 'Car Loan', pct: 72 }, { label: 'Alice', pct: 40 }, { label: 'Bank', pct: 88 }].map((d) => (
                  <div key={d.label} className={styles.bentoProgressItem}>
                    <div className={styles.bentoProgressLabel}>{d.label}</div>
                    <div className={styles.bentoProgressTrack}>
                      <div className={styles.bentoProgressFill} style={{ width: `${d.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Three equal cards */}
          <div className={`${styles.bentoCard} ${styles.bentoThird}`}>
            <div className={`${styles.bentoIcon} ${styles.bentoIconNeutral}`}>
              <ArrowUpDown size={20} />
            </div>
            <h3 className={styles.bentoTitle}>Inflow & Outflow</h3>
            <p className={styles.bentoDesc}>
              Log every transaction — salary, groceries, transport — against
              your budget so nothing slips through unchecked.
            </p>
          </div>

          <div className={`${styles.bentoCard} ${styles.bentoThird}`}>
            <div className={`${styles.bentoIcon} ${styles.bentoIconNeutral}`}>
              <RefreshCw size={20} />
            </div>
            <h3 className={styles.bentoTitle}>Subscriptions</h3>
            <p className={styles.bentoDesc}>
              All your recurring charges in one view — streaming, tools, gym —
              with next billing dates and total monthly spend.
            </p>
          </div>

          <div className={`${styles.bentoCard} ${styles.bentoThird}`}>
            <div className={`${styles.bentoIcon} ${styles.bentoIconNeutral}`}>
              <CalendarDays size={20} />
            </div>
            <h3 className={styles.bentoTitle}>Planned Payments</h3>
            <p className={styles.bentoDesc}>
              Schedule bills before they arrive. Electricity, internet, insurance —
              set the frequency and always know what's coming.
            </p>
          </div>

          {/* Row 4: Budget Profiles (wide) + Dark Mode (narrow) */}
          <div className={`${styles.bentoCard} ${styles.bentoWide} ${styles.bentoAccentPurple}`}>
            <div className={styles.bentoCardInner}>
              <div className={`${styles.bentoIcon} ${styles.bentoIconPurple}`}>
                <Layers size={20} />
              </div>
              <h3 className={styles.bentoTitle}>Budget Profiles</h3>
              <p className={styles.bentoDesc}>
                Run separate budgets side by side. Keep your personal finances
                and freelance income completely independent — different groups,
                different categories, same app.
              </p>
              <div className={styles.bentoTag}>Great for freelancers</div>
            </div>
          </div>

          <div className={`${styles.bentoCard} ${styles.bentoNarrow}`}>
            <div className={`${styles.bentoIcon} ${styles.bentoIconNeutral}`}>
              <Moon size={20} />
            </div>
            <h3 className={styles.bentoTitle}>Light & Dark Mode</h3>
            <p className={styles.bentoDesc}>
              Fully themed for both environments. Follows your system
              preference or switch manually from settings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  return (
    <section className={styles.audience}>
      <div className={styles.sectionInner}>
        <span className={styles.sectionLabel}>Who it's for</span>
        <h2 className={`${styles.sectionTitle} ${styles.audienceTitle}`}>
          Built for people who take their money seriously
        </h2>
        <p className={`${styles.sectionSubtitle} ${styles.audienceSubtitle}`}>
          Not for businesses. Not for accountants. Just one person managing
          their own financial life with intention.
        </p>
        <div className={styles.audienceGrid}>
          {AUDIENCE.map(({ Icon, title, desc }) => (
            <div key={title} className={styles.audienceCard}>
              <div className={styles.audienceCardIcon}>
                <Icon size={22} />
              </div>
              <h3 className={styles.audienceCardTitle}>{title}</h3>
              <p className={styles.audienceCardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformsSection() {
  return (
    <section className={styles.platforms}>
      <div className={styles.sectionInner}>
        <span className={styles.sectionLabel}>Platforms</span>
        <h2 className={styles.sectionTitle}>Available on your devices</h2>
        <p className={styles.sectionSubtitle} style={{ margin: '0 auto' }}>
          One account, all your devices. Data syncs automatically when you're online.
        </p>
        <div className={styles.platformGrid}>
          {PLATFORMS.map(({ Icon, name, min }) => (
            <div key={name} className={styles.platformCard}>
              <div className={styles.platformCardIcon}>
                <Icon size={28} />
              </div>
              <p className={styles.platformCardName}>{name}</p>
              <p className={styles.platformCardSub}>{min}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.sectionInner}>
        <h2 className={styles.ctaTitle}>Start planning your money today</h2>
        <p className={styles.ctaSubtitle}>
          Free to download. No subscription required to get started.
        </p>
        <div className={styles.ctaActions}>
          <Link to="/download" className={styles.ctaBtnPrimary}>
            <DownloadIcon size={16} />
            Download Now
          </Link>
          <Link to="/docs/quickstart" className={styles.ctaBtnSecondary}>
            Quick Start Guide
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  return (
    <Layout
      title="Your personal money, planned."
      description="Budget every month, save with purpose, and stay on top of what you owe. Available on Android, iOS, Windows, and macOS."
    >
      <main>
        <HeroSection />
        <FeaturesSection />
        <AudienceSection />
        <PlatformsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
