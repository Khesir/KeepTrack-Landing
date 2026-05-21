import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Keep Track',
  description: 'Your personal money, planned. Budget every month, save with purpose, and stay on top of what you owe.',
  base: '/',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/app-icon.svg' }],
    ['link', { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#6366F1' }],
    ['meta', { property: 'og:title', content: 'Keep Track — Your personal money, planned.' }],
    ['meta', { property: 'og:description', content: 'Budget every month, save with purpose, and stay on top of what you owe. Available on Android, iOS, Windows, and macOS.' }],
    ['meta', { property: 'og:image', content: '/og-image.png' }],
  ],

  themeConfig: {
    logo: '/app-icon.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Download', link: '/download' },
      { text: 'Docs', link: '/docs/' },
      { text: 'GitHub', link: 'https://github.com/Khesir/KeepTrack' }
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/docs/' },
            { text: 'Installation', link: '/docs/installation' },
            { text: 'Quick Start', link: '/docs/quickstart' }
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Budgets', link: '/docs/features/budgets' },
            { text: 'Savings Wallets', link: '/docs/features/savings' },
            { text: 'Goals', link: '/docs/features/goals' },
            { text: 'Debts & Receivables', link: '/docs/features/debts' },
            { text: 'Subscriptions', link: '/docs/features/subscriptions' },
            { text: 'Planned Payments', link: '/docs/features/planned-payments' },
            { text: 'Budget Profiles', link: '/docs/features/budget-profiles' },
          ]
        },
        {
          text: 'Updates',
          items: [
            { text: 'Changelog', link: '/docs/changelog' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Khesir/KeepTrack' }
    ],

    footer: {
      message: 'Built for individuals who take their money seriously.',
      copyright: 'Copyright © 2025-present Keep Track'
    }
  }
})
