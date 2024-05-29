import { Montserrat } from 'next/font/google';
import { Playfair_Display } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '300'],
});

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: 'variable',
});
