'use client';

import { useTranslations } from 'next-intl';

export const HowweworkHero = () => {
  const t = useTranslations('HowweworkService');

  return (
    <section className="border-b border-[var(--ht-line)]">
      <div className="ht-container py-20 sm:py-28">
        <div className="ht-fade-up max-w-3xl">
          <p className="ht-eyebrow mb-4">{t('eyebrow')}</p>
          <h1 className="ht-display mb-6">{t('title')}</h1>
          <p className="ht-lede">{t('description')}</p>
        </div>
      </div>
    </section>
  );
};
