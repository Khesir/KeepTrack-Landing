import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Keep Track',
  tagline: 'Your personal money, planned.',
  favicon: 'img/favicon.ico',
  url: 'https://keep-track.khesir.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Khesir/KeepTrack/tree/main/landing/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/og-image.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Keep Track',
      logo: {
        alt: 'Keep Track',
        src: 'img/app-icon.svg',
        style: { borderRadius: '8px' },
      },
      items: [
        { to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$' },
        { to: '/download', label: 'Download', position: 'left' },
        { type: 'docSidebar', sidebarId: 'docs', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/Khesir/KeepTrack',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            { label: 'Download', to: '/download' },
            { label: 'Documentation', to: '/docs/intro' },
            { label: 'Quick Start', to: '/docs/quickstart' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Changelog', to: '/docs/changelog' },
            { label: 'GitHub', href: 'https://github.com/Khesir/KeepTrack' },
          ],
        },
        {
          title: 'Legal',
          items: [
            { label: 'Terms of Service', to: '/terms' },
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Security', to: '/security' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Keep Track. Built for individuals who take their money seriously.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
