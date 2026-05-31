'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TICKET_TYPES = [
  { value: 'bug', label: 'Bug Report', desc: 'Something is broken or not working as expected.' },
  { value: 'question', label: 'Question', desc: 'I need help understanding how something works.' },
  { value: 'feature', label: 'Feature Request', desc: 'I have an idea for something new.' },
  { value: 'other', label: 'Other', desc: 'Something else entirely.' },
];

type Field = 'name' | 'email' | 'subject' | 'message' | 'type';

export default function SupportPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', type: 'bug' });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const set = (field: Field, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<Field, string>> = {};
    if (!form.name.trim()) next.name = 'Name is required.';
    if (!form.email.trim()) next.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email.';
    if (!form.subject.trim()) next.subject = 'Subject is required.';
    if (!form.message.trim()) next.message = 'Message is required.';
    else if (form.message.trim().length < 20) next.message = 'Please provide more detail (min 20 characters).';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setServerError('');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/support`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.message?.[0] ?? data?.message ?? 'Submission failed.');
      }
      setSubmitted(true);
    } catch (err: any) {
      setServerError(err.message ?? 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-snow pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-violet mb-3">Support</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-midnight tracking-tight mb-3">
              How can we help?
            </h1>
            <p className="text-wolf-gray text-base leading-relaxed">
              Report a bug, ask a question, or suggest a feature. Every message goes directly to my inbox and I'll get back to you.
            </p>
          </div>

          {submitted ? (
            <div className="bg-surface border border-ash rounded-2xl p-10 text-center">
              <div className="w-14 h-14 bg-success/12 border border-success/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-success" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-midnight mb-2">Message sent</h2>
              <p className="text-wolf-gray text-sm leading-relaxed max-w-sm mx-auto">
                Thanks for reaching out. I'll review your message and get back to you at <span className="text-midnight font-medium">{form.email}</span>.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '', type: 'bug' }); }}
                className="mt-6 px-5 py-2.5 border border-ash text-midnight text-sm font-medium rounded-xl hover:bg-snow-2 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name" error={errors.name}>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    className={inputCls(!!errors.name)}
                  />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    className={inputCls(!!errors.email)}
                  />
                </Field>
              </div>

              <Field label="Type">
                <div className="grid grid-cols-2 gap-2">
                  {TICKET_TYPES.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => set('type', t.value)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm transition-all duration-150 ${
                        form.type === t.value
                          ? 'border-violet bg-violet-light text-midnight'
                          : 'border-ash bg-surface text-wolf-gray hover:border-ash-light hover:text-midnight'
                      }`}
                    >
                      <div className="font-medium text-midnight text-xs mb-0.5">{t.label}</div>
                      <div className="text-wolf-gray text-xs leading-snug">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Subject" error={errors.subject}>
                <input
                  type="text"
                  placeholder="Brief summary of your issue"
                  value={form.subject}
                  onChange={(e) => set('subject', e.target.value)}
                  className={inputCls(!!errors.subject)}
                />
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  placeholder="Describe your issue, question, or idea in detail…"
                  rows={6}
                  value={form.message}
                  onChange={(e) => set('message', e.target.value)}
                  className={`${inputCls(!!errors.message)} resize-none`}
                />
                <span className="text-xs text-wolf-gray mt-1 block text-right">
                  {form.message.length} / 2000
                </span>
              </Field>

              {serverError && (
                <p className="text-error text-sm px-1">{serverError}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3.5 bg-violet text-white font-semibold text-sm rounded-xl hover:bg-violet-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-violet/25"
              >
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}

          <div className="mt-14 pt-10 border-t border-ash">
            <h3 className="text-sm font-semibold text-midnight mb-4">Before you write</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Check the roadmap', desc: 'Your feature might already be planned.', href: '/roadmap' },
                { title: 'Read the changelog', desc: 'Your bug might already be fixed.', href: '/changelog' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-start gap-3 p-4 bg-surface border border-ash rounded-xl hover:border-ash-light hover:shadow-sm transition-all duration-200 group"
                >
                  <div>
                    <div className="font-medium text-midnight text-sm group-hover:text-violet transition-colors">{item.title} →</div>
                    <div className="text-wolf-gray text-xs mt-0.5">{item.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-midnight uppercase tracking-wide">{label}</label>
      {children}
      {error && <p className="text-error text-xs">{error}</p>}
    </div>
  );
}

function inputCls(hasError: boolean) {
  return `w-full px-4 py-3 bg-surface border rounded-xl text-sm text-midnight placeholder-wolf-gray focus:outline-none transition-colors ${
    hasError
      ? 'border-error focus:border-error'
      : 'border-ash focus:border-violet'
  }`;
}
