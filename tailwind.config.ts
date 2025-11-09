import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,ts,tsx,js,jsx}',
    './src/assets/**/*.{css,pcss,scss}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#80bf45',
          slate: '#5a6268',
          teal: '#00827a',
          light: '#e5e7eb'
        }
      },
      borderRadius: {
        pill: '9999px',
        xl: '0.75rem',
        '2xl': '1rem'
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,.06)'
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif'
        ]
      }
    }
  },
  plugins: [typography]
};

export default config;
