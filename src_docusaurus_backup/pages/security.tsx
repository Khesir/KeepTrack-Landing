import React from 'react';
import Layout from '@theme/Layout';
import styles from './legal.module.css';

const LAST_UPDATED = 'May 31, 2026';

export default function Security(): React.ReactElement {
  return (
    <Layout title="Security & Data Ownership" description="How Keep Track protects your data">
      <main className={styles.page}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <h1 className={styles.title}>Security & Data Ownership</h1>
            <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>
          </div>

          <div className={styles.body}>
            <p>
              Keep Track is designed around a simple principle: your financial data belongs to you.
              This page explains how your data is stored, how backups are encrypted, and what
              we can and cannot access on our servers.
            </p>

            <h2>1. Your Data, Your Keys</h2>
            <p>
              When you export or sync a backup, your data is <strong>encrypted on your device
              before it ever leaves it</strong>. The encryption key is derived from a password
              you choose — only you know that password, and it is never sent to our servers.
              This means that even if someone were to access our database, they would see only
              random ciphertext they cannot read.
            </p>
            <p>
              The flip side of this design: <strong>if you lose your backup password, the backup
              cannot be recovered by anyone — including us.</strong> There is no "forgot password"
              option for backup files.
            </p>

            <h2>2. How Encryption Works</h2>
            <p>
              Backups use industry-standard <strong>AES-256 in CBC mode</strong> with PKCS7 padding.
              The encryption key is derived from your password using iterated SHA-256 with a
              random 16-byte salt (10,000 rounds), making brute-force attacks significantly more
              expensive. A random 16-byte initialization vector (IV) is generated fresh for each
              export, so two exports of the same data produce different ciphertext.
            </p>
            <p>The backup file format (`.ktbak`) contains:</p>
            <ul>
              <li><strong>version</strong> — backup format version for future compatibility</li>
              <li><strong>salt</strong> — random bytes used in key derivation (safe to store)</li>
              <li><strong>iv</strong> — random initialization vector (safe to store)</li>
              <li><strong>data</strong> — AES-256 encrypted, base64-encoded payload</li>
            </ul>
            <p>
              The salt and IV are not secrets — they exist so your password alone can reconstruct
              the exact key needed to decrypt, on any device.
            </p>

            <h2>3. Local-First Architecture</h2>
            <p>
              All your financial data lives in a local database (Hive) on your device. The app
              works fully offline — your transactions, budgets, goals, and savings are always
              available without a network connection. The backend is used for:
            </p>
            <ul>
              <li>Account authentication (Google OAuth and email/password)</li>
              <li>Storing your <em>encrypted</em> backup blob when you use Cloud Sync</li>
            </ul>
            <p>
              The backend never receives your raw financial data in plaintext during the backup
              process. All data is encrypted before upload and decrypted after download, entirely
              on your device.
            </p>

            <h2>4. What We Can and Cannot Access</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: 24 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--kt-border)' }}>
                  <th style={{ textAlign: 'left', padding: '10px 0', fontSize: 14 }}>What is stored on our servers</th>
                  <th style={{ textAlign: 'left', padding: '10px 0', fontSize: 14 }}>Can we read it?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Your email address and display name', 'Yes — used for authentication'],
                  ['JWT authentication tokens', 'Yes — used to verify your session'],
                  ['Encrypted backup blob (Cloud Sync)', 'No — encrypted with your password before upload'],
                  ['Your transactions, budgets, goals, etc.', 'No — stored locally on your device only'],
                  ['Your backup password', 'No — never sent to our servers'],
                ].map(([item, access]) => (
                  <tr key={item} style={{ borderBottom: '1px solid var(--kt-border)' }}>
                    <td style={{ padding: '10px 0', fontSize: 14, color: 'var(--kt-text-secondary)', paddingRight: 16 }}>{item}</td>
                    <td style={{ padding: '10px 0', fontSize: 14, color: 'var(--kt-text-secondary)', whiteSpace: 'nowrap' }}>{access}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h2>5. Cloud Sync (Optional)</h2>
            <p>
              Cloud Sync is entirely opt-in. When you tap "Sync to Cloud", your data is encrypted
              on your device and the ciphertext is stored on our servers — one backup per account.
              When you "Restore from Cloud", the ciphertext is downloaded and decrypted on your
              device using your password.
            </p>
            <p>
              You can also export and import backups as local <code>.ktbak</code> files without
              ever involving our servers.
            </p>

            <h2>6. Contact</h2>
            <p>
              If you have questions about security or data ownership, contact us at{' '}
              <a href="mailto:ajrizaldo1@gmail.com">ajrizaldo1@gmail.com</a>.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
