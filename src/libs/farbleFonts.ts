import { Geist, Geist_Mono } from 'next/font/google';

/* Farble 5 Max ships its own Geist pairing, isolated from the H&T stack. */
export const fontFarbleSans = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-geist',
  display: 'swap',
});

export const fontFarbleMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-geist-mono',
  display: 'swap',
});
