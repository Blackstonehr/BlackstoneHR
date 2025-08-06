import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './apps/web/**/*.{js,ts,jsx,tsx}',
    './apps/web/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          gold: '#FFD700',
          matte: '#1C1C1C',
        },
      },
    },
  },
  plugins: [],
};

export default config;
