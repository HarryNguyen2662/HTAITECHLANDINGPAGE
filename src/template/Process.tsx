'use client';

import { useTranslations } from 'next-intl';

const items = [
  { title: 'item1_title', description: 'item1_description' },
  { title: 'item2_title', description: 'item2_description' },
  { title: 'item3_title', description: 'item3_description' },
  { title: 'item4_title', description: 'item4_description' },
] as const;

export const Process = () => {
  const t = useTranslations('DeliveryProof');

  return (
    <section className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-elevated)]">
      <div className="ht-container">
        <div className="mb-12 max-w-2xl">
          <p className="ht-eyebrow mb-3">{t('eyebrow')}</p>
          <h2 className="ht-title">{t('title')}</h2>
        </div>

        <ol className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <li key={item.title} className="ht-panel p-6 sm:p-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-faint)]">
                0
                {index + 1}
              </p>
              <h3 className="mb-3 text-xl font-semibold text-[var(--ht-ink)]">
                {t(item.title)}
              </h3>
              <p className="text-[var(--ht-muted)]">{t(item.description)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
