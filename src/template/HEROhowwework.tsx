'use client';

import { Text } from '@astryxdesign/core/Text';
import { useTranslations } from 'next-intl';

export const HowweworkHero = () => {
  const t = useTranslations('HowweworkService');

  return (
    <section className="border-b border-[var(--ht-line)]">
      <div className="ht-container py-20 sm:py-28">
        <div className="ht-fade-up max-w-3xl">
          <p className="ht-eyebrow mb-4">{t('eyebrow')}</p>
          <h1 className="ht-display mb-6">{t('title')}</h1>
          <Text type="large" color="secondary" as="p">
            {t('description')}
          </Text>
        </div>
      </div>
    </section>
  );
};
