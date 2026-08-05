import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#01519b',
        depth: '#013f79',
        signal: '#FFA500',
        insight: '#1F9E8C',
        paper: '#F7F5F0',
        ash: '#5A6478',
      },
      fontFamily: {
        display: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['60px', { lineHeight: '1.02', letterSpacing: '-0.02em' }],
        'display-md': ['48px', { lineHeight: '1.04', letterSpacing: '-0.015em' }],
        'display-sm': ['36px', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'display-xs': ['26px', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        eyebrow: '0.08em',
      },
      maxWidth: {
        shell: '1240px',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
