import type { Config } from 'tailwindcss';

const config: Config = {
  content: {
    files: []
  },
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0f172a',
          secondary: '#1e293b',
          tertiary: '#334155',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
        },
        primary: {
          accent: '#38bdf8',
        },
        border: {
          primary: '#334155',
        },
      },
    },
  },
  plugins: [],
};

export default config;
