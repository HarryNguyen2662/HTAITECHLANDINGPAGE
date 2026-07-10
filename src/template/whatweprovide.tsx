'use client';

import { Button } from '@astryxdesign/core/Button';
import { Text } from '@astryxdesign/core/Text';
import { useTranslations } from 'next-intl';

export const WhatWeProvide = () => {
  const t = useTranslations('WhatWeProvide');

  return (
    <section
      className="ht-section border-y border-[var(--ht-line)]"
      style={{ backgroundColor: 'rgba(239, 234, 227, 0.5)' }}
    >
      <div className="ht-container grid items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="ht-eyebrow mb-3">{t('eyebrow')}</p>
          <h2 className="ht-title mb-4">{t('title')}</h2>
          <Text type="large" color="secondary" as="p">
            {t('description')}
          </Text>
        </div>

        <div className="border border-[var(--ht-line)] bg-white/70 p-8 sm:p-10">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ht-ink)]">
            Scrum / Agile methodology
          </p>
          <ul className="mb-8 space-y-4">
            {[t('point1'), t('point2'), t('point3')].map(point => (
              <li key={point} className="flex gap-3 text-[var(--ht-muted)]">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[var(--ht-accent)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Button label={t('cta')} variant="primary" href="/contacts" />
        </div>
      </div>
    </section>
  );
};
