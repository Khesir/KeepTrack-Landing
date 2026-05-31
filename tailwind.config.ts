import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#2C2C2A',
        'midnight-soft': '#3A3A38',
        snow: '#F1EFE8',
        'snow-2': '#EBE9E1',
        violet: '#534AB7',
        'violet-light': '#EEEDFE',
        'violet-dark': '#3C3489',
        'wolf-gray': '#888780',
        ash: '#D3D1C7',
        'ash-light': '#E8E7DF',
        surface: '#FFFFFF',
        success: '#1D9E75',
        error: '#E24B4A',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(241,239,232,0.07) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot-24': '24px 24px',
      },
    },
  },
  plugins: [],
};

export default config;
