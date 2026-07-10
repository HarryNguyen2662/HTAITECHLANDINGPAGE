'use client';

import { useTranslations } from 'next-intl';

export const ProofStrip = () => {
  const t = useTranslations('Proof');
  const items = [
    { label: t('item1_label'), value: t('item1_value') },
    { label: t('item2_label'), value: t('item2_value') },
    { label: t('item3_label'), value: t('item3_value') },
    { label: t('item4_label'), value: t('item4_value') },
  ];

  return (
    <section className="border-b border-[var(--ht-line)] bg-[var(--ht-bg-elevated)]">
      <div className="ht-container py-10">
        <p className="ht-eyebrow mb-6">{t('eyebrow')}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(item => (
            <div key={item.label} className="border-l-2 border-[var(--ht-accent)] pl-4">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--ht-faint)]">
                {item.label}
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--ht-ink)]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
