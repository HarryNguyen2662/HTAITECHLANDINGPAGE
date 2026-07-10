'use client';

import { Button } from '@astryxdesign/core/Button';
import { HStack } from '@astryxdesign/core/HStack';
import { useTranslations } from 'next-intl';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <section className="border-y border-[var(--ht-line)] bg-[var(--ht-bg-elevated)]">
      <div className="ht-container py-20 sm:py-24">
        <div className="ht-fade-up max-w-3xl">
          <p className="ht-eyebrow mb-4">{t('eyebrow')}</p>
          <h2 className="ht-title mb-4">{t('title')}</h2>
          <p className="ht-lede mb-8">{t('description')}</p>
          <HStack gap={3} wrap="wrap">
            <Button label={t('button_text')} variant="primary" size="lg" href="/contacts" />
            <Button label={t('secondary_button')} variant="secondary" size="lg" href="/services" />
          </HStack>
        </div>
      </div>
    </section>
  );
};
