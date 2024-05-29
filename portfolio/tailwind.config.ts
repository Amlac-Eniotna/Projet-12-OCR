import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mauve: {
          12: '#DEDEFF',
          11: '#AEA6FF',
          10: '#5328CC',
          9: '#5F3CDD',
          8: '#5F51C2',
          7: '#4F43A1',
          6: '#42368B',
          5: '#382B7C',
          4: '#2E226C',
          3: '#241E4E',
          2: '#161528',
          1: '#100F1D',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
