/* eslint-disable global-require */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './comp/**/*.{js,ts,jsx,tsx,mdx}',
    './section/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './util/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        mdDown: { max: '768px' },
        // => @media (min-width: 992px) { ... }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        pry: {
          50: '#DBEEFF',
          100: '#B8DEFF',
          200: '#75BFFF',
          300: '#2E9DFF',
          400: '#007AE6',
          500: '#0057A1',
          600: '#004480',
          700: '#003461',
          800: '#002342',
          900: '#00101F',
          950: '#00080F',
        },
        secondary: '#ede9e3',
        accent: '#FFD700',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        open: ['var(--font-opensans)'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({
      nocompatible: true,
      preferredStrategy: 'pseudoelements',
    }),
  ],
};
export default config;
