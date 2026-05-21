import React from 'react';
import Layout from '@theme/Layout';
import styles from './legal.module.css';

const LAST_UPDATED = 'May 21, 2026';

export default function Terms(): React.ReactElement {
  return (
    <Layout title="Terms of Service" description="Keep Track Terms of Service">
      <main className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>
          </div>

          <div className={styles.body}>
            <p>
              These Terms of Service ("Terms") govern your use of Keep Track ("the App"),
              operated by Keep Track ("we", "us", or "our"). By downloading or using the App,
              you agree to be bound by these Terms. If you do not agree, do not use the App.
            </p>

            <h2>1. Use of the App</h2>
            <p>
              Keep Track is a personal budgeting application for individual use.
              You may use the App only for lawful purposes and in accordance with these Terms.
              You agree not to:
            </p>
            <ul>
              <li>Use the App for any commercial or business purpose</li>
              <li>Attempt to reverse engineer, decompile, or disassemble the App</li>
              <li>Use the App in any way that could damage, disable, or impair our servers</li>
              <li>Attempt to gain unauthorized access to any part of the App or its related systems</li>
            </ul>

            <h2>2. User Accounts</h2>
            <p>
              To use Keep Track, you must create an account using a valid email address or
              Google account. You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your account.
              You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2>3. Your Data</h2>
            <p>
              All financial data you enter into Keep Track (budgets, transactions, goals, debts,
              and related information) belongs to you. We do not claim ownership of your data.
              We store your data securely on our servers to enable syncing across your devices.
              See our <a href="/privacy">Privacy Policy</a> for details on how we handle your data.
            </p>

            <h2>4. Accuracy of Financial Information</h2>
            <p>
              Keep Track is a personal budgeting tool, not a financial advisory service.
              The App does not provide financial, investment, tax, or legal advice.
              All financial decisions you make based on information in the App are your own
              responsibility. We are not liable for any financial losses arising from your
              use of the App.
            </p>

            <h2>5. Availability</h2>
            <p>
              We strive to keep Keep Track available at all times, but we do not guarantee
              uninterrupted access. We reserve the right to modify, suspend, or discontinue
              the App at any time without prior notice.
            </p>

            <h2>6. Updates</h2>
            <p>
              We may update the App from time to time to fix bugs, add features, or comply
              with platform requirements. Continued use of the App after an update constitutes
              acceptance of any changes to these Terms.
            </p>

            <h2>7. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account at any time if we
              believe you have violated these Terms. You may delete your account at any time
              from within the App settings.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              The App is provided "as is" without warranties of any kind, either express or
              implied. We do not warrant that the App will be error-free, secure, or
              continuously available.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, we shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages arising from your use
              of the App, even if we have been advised of the possibility of such damages.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable laws.
              Any disputes arising from these Terms or your use of the App shall be resolved
              through good faith negotiation before pursuing legal remedies.
            </p>

            <h2>11. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at{' '}
              <a href="mailto:ajrizaldo1@gmail.com">ajrizaldo1@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
