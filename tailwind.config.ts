import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        apple: {
          void: '#070709',
          obsidian: '#0d0d12',
          surface: '#15151c',
          card: '#1c1c24',
          subtle: '#2a2a36',
          border: 'rgba(255, 255, 255, 0.08)',
          text: '#f5f5f7',
          muted: '#86868b',
          dim: '#48484a',
          azure: '#0071e3',
          glow: '#2997ff',
          emerald: '#30d158',
          light: '#fbfbfd',
          lightCard: '#f5f5f7',
          lightText: '#1d1d1f',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Inter"',
          'system-ui',
          'sans-serif',
        ],
        mono: ['"SF Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        snug: '-0.015em',
      },
      boxShadow: {
        'glass-edge': '0 0 0 1px rgba(255, 255, 255, 0.08), 0 20px 50px rgba(0, 0, 0, 0.6)',
        'apple-card': '0 25px 60px -15px rgba(0, 0, 0, 0.7)',
        'glow-azure': '0 0 50px -10px rgba(41, 151, 255, 0.35)',
        'glow-emerald': '0 0 40px -10px rgba(48, 209, 88, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

