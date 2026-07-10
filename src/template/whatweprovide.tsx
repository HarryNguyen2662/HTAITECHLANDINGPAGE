'use client';

import { Button } from '@astryxdesign/core/Button';
import { useTranslations } from 'next-intl';

export const WhatWeProvide = () => {
  const t = useTranslations('TeamShapes');

  return (
    <section className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-soft)]">
      <div className="ht-container grid gap-10 lg:grid-cols-2">
        <div>
          <p className="ht-eyebrow mb-3">{t('eyebrow')}</p>
          <h2 className="ht-title mb-4">{t('title')}</h2>
          <p className="ht-lede">{t('description')}</p>
        </div>

        <div className="space-y-4">
          {[
            { title: 'item1_title', body: 'item1_body' },
            { title: 'item2_title', body: 'item2_body' },
            { title: 'item3_title', body: 'item3_body' },
          ].map(item => (
            <div key={item.title} className="ht-panel p-5">
              <h3 className="mb-2 font-semibold text-[var(--ht-ink)]">{t(item.title)}</h3>
              <p className="text-sm text-[var(--ht-muted)]">{t(item.body)}</p>
            </div>
          ))}
          <Button label={t('cta')} variant="primary" href="/contacts" />
        </div>
      </div>
    </section>
  );
};
