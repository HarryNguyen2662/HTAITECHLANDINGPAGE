'use client';

import { Button } from '@astryxdesign/core/Button';
import { Text } from '@astryxdesign/core/Text';
import { useTranslations } from 'next-intl';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <section className="relative overflow-hidden border-y border-[var(--ht-line)]">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(26,24,20,0.92), rgba(47,93,80,0.78)), url(/assets/images/CTABG.jpg) center/cover',
        }}
      />
      <div className="ht-container py-20 sm:py-28">
        <div className="ht-fade-up mx-auto max-w-3xl text-center text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
            Next step
          </p>
          <h2
            className="mb-4 text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ fontFamily: 'Georgia, \'Times New Roman\', serif' }}
          >
            {t('title')}
          </h2>
          <Text type="large" color="inherit" as="p">
            <span className="text-white/80">{t('description')}</span>
          </Text>
          <div className="mt-8 flex justify-center">
            <Button
              label={t('button_text')}
              variant="primary"
              size="lg"
              href="/contacts"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
