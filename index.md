---
layout: home

hero:
  name: "Keep Track"
  text: "Your personal money, planned."
  tagline: "Budget every month, save with purpose, and stay on top of what you owe — all in one place."
  image:
    src: /app-icon.svg
    alt: Keep Track
  actions:
    - theme: brand
      text: Download Now
      link: /download
    - theme: alt
      text: See What's Inside
      link: /docs/

features:
  - icon: 📊
    title: Monthly Budgets
    details: Plan your income and expenses before the month begins. Group categories your way — housing, food, transport — and watch actuals fill in as you spend.

  - icon: 💸
    title: Inflow & Outflow
    details: Track every peso in and out. Log salary, freelance income, and everyday expenses against your budget so nothing slips through the cracks.

  - icon: 🪣
    title: Savings Wallets
    details: Create named buckets for the things that matter — emergency fund, travel, a new laptop. Deposit, withdraw, and see a full history per wallet.

  - icon: 🎯
    title: Financial Goals
    details: Set a target amount and a deadline. Track your monthly contribution progress toward big purchases, trips, or milestones you're working toward.

  - icon: 💳
    title: Debts & Receivables
    details: Know exactly what you owe and what others owe you. Record loans, track repayments, and see your obligations in both directions at a glance.

  - icon: 🔁
    title: Subscriptions
    details: See all your recurring subscriptions in one list — streaming, tools, gym — with next billing dates and monthly cost equivalents so you know what's auto-charging.

  - icon: 📅
    title: Planned Payments
    details: Schedule upcoming bills before they arrive. Electricity, internet, insurance — set the frequency and never be caught off guard.

  - icon: 🗂️
    title: Budget Profiles
    details: Run separate budget plans side by side. Keep your personal finances and freelance income in their own spaces without mixing them up.

  - icon: 🌙
    title: Light & Dark Mode
    details: Fully themed for both environments. Follows your system preference or switch manually from settings anytime.
---

<div class="custom-section">

## Built for people who take their money seriously

Keep Track is not just an expense tracker. It's a full monthly budgeting system built for individuals who want to plan their money before they spend it — not just record what happened after.

Whether you're on a salary, managing freelance income, paying off a loan, or saving toward something big — Keep Track gives you the structure to stay in control every month.

### Who it's for

- **Young professionals** allocating a monthly paycheck across rent, food, transport, and goals
- **Freelancers** who need to separate personal finances from side-income cash flow  
- **Anyone** juggling subscriptions, loans, or recurring bills they want to stay ahead of

### What makes it different

Most budgeting apps track the past. Keep Track lets you **plan the month ahead** — set your income, allocate every peso to a category, and watch actuals fill in as you go. It's the envelope method, without the envelopes.

</div>

<div class="platform-section">

## Available on Android, iOS, Windows & macOS

<div class="platform-grid">
  <div class="platform-card">
    <div class="platform-icon">🤖</div>
    <div class="platform-name">Android</div>
    <div class="platform-sub">8.0 and above</div>
  </div>
  <div class="platform-card">
    <div class="platform-icon">🍎</div>
    <div class="platform-name">iOS</div>
    <div class="platform-sub">14 and above</div>
  </div>
  <div class="platform-card">
    <div class="platform-icon">🪟</div>
    <div class="platform-name">Windows</div>
    <div class="platform-sub">Windows 10+</div>
  </div>
  <div class="platform-card">
    <div class="platform-icon">🍏</div>
    <div class="platform-name">macOS</div>
    <div class="platform-sub">Monterey and above</div>
  </div>
</div>

</div>

<div class="cta-section">

## Ready to take control?

<DownloadButtons />

</div>

<style>
.custom-section {
  max-width: 800px;
  margin: 64px auto 0;
  padding: 0 24px;
}
.custom-section h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
}
.custom-section h3 {
  font-size: 18px;
  font-weight: 600;
  margin: 32px 0 12px;
}
.platform-section {
  max-width: 800px;
  margin: 64px auto 0;
  padding: 0 24px;
  text-align: center;
}
.platform-section h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 32px;
}
.platform-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 560px;
  margin: 0 auto;
}
@media (max-width: 600px) {
  .platform-grid { grid-template-columns: repeat(2, 1fr); }
}
.platform-card {
  padding: 20px 12px;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}
.platform-icon { font-size: 28px; margin-bottom: 8px; }
.platform-name { font-weight: 600; font-size: 14px; }
.platform-sub { font-size: 12px; color: var(--vp-c-text-2); margin-top: 4px; }
.cta-section {
  max-width: 800px;
  margin: 64px auto 80px;
  padding: 0 24px;
  text-align: center;
}
.cta-section h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
}
</style>
