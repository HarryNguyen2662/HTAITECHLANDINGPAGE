'use client';

import { Button } from '@astryxdesign/core/Button';
import { HStack } from '@astryxdesign/core/HStack';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative overflow-hidden border-b border-[var(--ht-line)]">
      <div className="ht-container flex min-h-[78vh] flex-col justify-center py-20 sm:py-28">
        <div className="ht-fade-up max-w-3xl">
          <p className="ht-eyebrow mb-5">{t('brand')}</p>
          <h1 className="ht-display mb-6">{t('title')}</h1>
          <p className="ht-lede mb-8">{t('description')}</p>
          <HStack gap={3} wrap="wrap">
            <Button label={t('primary_button')} variant="primary" size="lg" href="/contacts" />
            <Button label={t('secondary_button')} variant="secondary" size="lg" href="/howwework" />
          </HStack>
        </div>
      </div>
    </section>
  );
};
