import React from 'react';
import Layout from '@theme/Layout';
import styles from './legal.module.css';

const LAST_UPDATED = 'May 21, 2026';

export default function Privacy(): React.ReactElement {
  return (
    <Layout title="Privacy Policy" description="Keep Track Privacy Policy">
      <main className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>
          </div>

          <div className={styles.body}>
            <p>
              This Privacy Policy describes how Keep Track ("we", "us", or "our") collects,
              uses, and protects your personal information when you use our mobile and desktop
              application ("the App"). We are committed to protecting your privacy and handling
              your data with transparency.
            </p>

            <h2>1. Information We Collect</h2>
            <h3>Account Information</h3>
            <ul>
              <li><strong>Email address</strong> — used to create and identify your account</li>
              <li><strong>Display name and profile photo</strong> — if you sign in with Google</li>
              <li><strong>Authentication tokens</strong> — JWT tokens used to secure your session</li>
            </ul>

            <h3>Financial Data You Enter</h3>
            <p>
              All financial data you create within the App is stored on our secure servers
              to enable syncing across your devices. This includes:
            </p>
            <ul>
              <li>Budget groups, categories, and planned amounts</li>
              <li>Transactions (income, expenses, transfers)</li>
              <li>Savings wallet names and balances</li>
              <li>Financial goals and contribution history</li>
              <li>Debts, receivables, and payment records</li>
              <li>Subscriptions and planned payment schedules</li>
            </ul>

            <h3>Usage Information</h3>
            <p>
              We do not collect analytics, usage tracking, crash reports, or behavioral data
              beyond what is necessary to operate the App and sync your data.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To provide and operate the App</li>
              <li>To sync your data across your devices</li>
              <li>To authenticate your identity and secure your account</li>
              <li>To respond to support requests</li>
            </ul>
            <p>
              We do not sell, rent, or share your personal information or financial data
              with third parties for marketing or advertising purposes.
            </p>

            <h2>3. Data Storage & Security</h2>
            <p>
              Your data is stored in a cloud database (MongoDB) secured with encryption
              in transit (TLS) and at rest. Authentication is handled via JWT tokens with
              secure refresh token rotation. We take reasonable measures to protect your
              data, but no system is completely secure.
            </p>

            <h2>4. Third-Party Services</h2>
            <p>The App uses the following third-party services:</p>
            <ul>
              <li><strong>Google OAuth</strong> — optional sign-in method. Subject to Google's Privacy Policy.</li>
              <li><strong>Vercel</strong> — serverless hosting for our backend API.</li>
            </ul>
            <p>
              We do not integrate advertising networks, analytics platforms, or data brokers.
            </p>

            <h2>5. Data Retention</h2>
            <p>
              Your data is retained for as long as your account is active. If you delete
              your account, your personal information and financial data will be permanently
              deleted from our servers within 30 days.
            </p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access</strong> your personal data</li>
              <li><strong>Correct</strong> inaccurate data</li>
              <li><strong>Delete</strong> your account and all associated data</li>
              <li><strong>Export</strong> your financial data (where available in the App)</li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{' '}
              <a href="mailto:ajrizaldo1@gmail.com">ajrizaldo1@gmail.com</a>.
            </p>

            <h2>7. Children's Privacy</h2>
            <p>
              The App is not directed at children under the age of 13. We do not knowingly
              collect personal information from children under 13. If you believe a child
              has provided us with personal information, please contact us to have it removed.
            </p>

            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by updating the date at the top of this page. Continued
              use of the App after changes constitutes acceptance of the updated policy.
            </p>

            <h2>9. Contact</h2>
            <p>
              If you have questions or concerns about this Privacy Policy or your data,
              please contact us at{' '}
              <a href="mailto:ajrizaldo1@gmail.com">ajrizaldo1@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
