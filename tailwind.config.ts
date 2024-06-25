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
        bw: {
          12: '#EEEEF0',
          11: '#B2B3BD',
          10: '#797B86',
          9: '#6C6E79',
          8: '#5F606A',
          7: '#46484F',
          6: '#393A40',
          5: '#303136',
          4: '#292A2E',
          3: '#222325',
          2: '#19191B',
          1: '#111113',
        },
        wmauve: {
          12: '#2E216B',
          11: '#6045D7',
          10: '#5328CC',
          9: '#5F3CDD',
          8: '#9E99FF',
          7: '#B8B6FF',
          6: '#CCCBFF',
          5: '#DADAFF',
          4: '#E6E6FF',
          3: '#F0F1FF',
          2: '#F8F8FF',
          1: '#FDFDFF',
        },
        wbw: {
          12: '#1E1F24',
          11: '#62636C',
          10: '#80828D',
          9: '#8B8D98',
          8: '#B9BBC6',
          7: '#CDCED7',
          6: '#D8D9E0',
          5: '#E0E1E6',
          4: '#E7E8EC',
          3: '#EFF0F3',
          2: '#F9F9FB',
          1: '#FCFCFD',
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
