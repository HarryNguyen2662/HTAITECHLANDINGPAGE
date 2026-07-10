import '@/styles/farble-theme/theme.css';

import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

import { FarbleComparison } from '@/features/farble/FarbleComparison';
import { FarbleCta } from '@/features/farble/FarbleCta';
import { FarbleFaq } from '@/features/farble/FarbleFaq';
import { FarbleFeatures } from '@/features/farble/FarbleFeatures';
import { FarbleFooter } from '@/features/farble/FarbleFooter';
import { FarbleHero } from '@/features/farble/FarbleHero';
import { FarbleLogos } from '@/features/farble/FarbleLogos';
import { FarbleNav } from '@/features/farble/FarbleNav';
import { FarblePricing } from '@/features/farble/FarblePricing';
import { FarbleProvider } from '@/features/farble/FarbleProvider';
import { FarbleTestimonials } from '@/features/farble/FarbleTestimonials';
import { fontFarbleMono, fontFarbleSans } from '@/libs/farbleFonts';

export const metadata: Metadata = {
  title: 'Farble 5 Max — Frontier reasoning with a 2M-token context window',
  description:
    'Farble 5 Max is frontier AI reasoning with a 2M-token context window and native tool use. Built for the problems you can\'t get wrong. Start a free trial.',
};

const FarblePage = async (props: { params: Promise<{ locale: string }> }) => {
  setRequestLocale((await props.params).locale);

  return (
    // Font variables inherit down to every Astryx component; literal Farble
    // canvas colors here because the theme tokens only resolve inside <Theme>.
    <div
      className={`${fontFarbleSans.variable} ${fontFarbleMono.variable} min-h-dvh bg-[#0B0D10] font-[family-name:var(--font-geist)] text-[#F2F4F7] antialiased`}
    >
      <FarbleProvider>
        <FarbleNav />
        <main>
          <FarbleHero />
          <FarbleLogos />
          <FarbleFeatures />
          <FarbleComparison />
          <FarbleTestimonials />
          <FarblePricing />
          <FarbleFaq />
          <FarbleCta />
        </main>
        <FarbleFooter />
      </FarbleProvider>
    </div>
  );
};

export default FarblePage;
