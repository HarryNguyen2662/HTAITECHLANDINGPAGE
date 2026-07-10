'use client';

import { Button } from '@astryxdesign/core/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Products = () => {
  const t = useTranslations('Products');

  const shippedProducts = [
    { tag: 'p1_tag', name: 'p1_name', category: 'p1_category', description: 'p1_description', href: '/project#projects' },
    { tag: 'p2_tag', name: 'p2_name', category: 'p2_category', description: 'p2_description', href: '/project#projects' },
    { tag: 'p3_tag', name: 'p3_name', category: 'p3_category', description: 'p3_description', href: '/project#projects' },
    { tag: 'p4_tag', name: 'p4_name', category: 'p4_category', description: 'p4_description', href: '/project#projects' },
  ] as const;

  const buildingNow = [
    { name: 'b1_name', category: 'b1_category', description: 'b1_description', next: 'b1_next' },
    { name: 'b2_name', category: 'b2_category', description: 'b2_description', next: 'b2_next' },
    { name: 'b3_name', category: 'b3_category', description: 'b3_description', next: 'b3_next' },
  ] as const;

  return (
    <>
      <section id="products" className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-soft)]">
        <div className="ht-container">
          <div className="mb-12 max-w-2xl">
            <p className="ht-eyebrow mb-3">{t('eyebrow')}</p>
            <h2 className="ht-title mb-4">{t('title')}</h2>
            <p className="ht-lede">{t('description')}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {shippedProducts.map(product => (
              <article
                key={product.name}
                className="ht-panel flex flex-col p-6 transition-colors hover:border-[var(--ht-line-strong)] sm:p-8"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-accent)]">
                    {t(product.tag)}
                  </p>
                  <span className="border border-[var(--ht-line)] px-2 py-0.5 text-xs text-[var(--ht-muted)]">
                    {t('status_live')}
                  </span>
                </div>
                <h3 className="mb-1 text-2xl font-semibold tracking-tight text-[var(--ht-ink)]">
                  {t(product.name)}
                </h3>
                <p className="mb-3 text-sm text-[var(--ht-faint)]">{t(product.category)}</p>
                <p className="mb-5 flex-1 text-[var(--ht-muted)]">{t(product.description)}</p>
                <Link
                  href={product.href}
                  className="text-sm font-medium text-[var(--ht-ink)] no-underline hover:text-[var(--ht-accent)]"
                >
                  {t('view_details')}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="building-now" className="ht-section">
        <div className="ht-container">
          <div className="mb-12 max-w-2xl">
            <p className="ht-eyebrow mb-3">{t('building_eyebrow')}</p>
            <h2 className="ht-title mb-4">{t('building_title')}</h2>
            <p className="ht-lede">{t('building_description')}</p>
          </div>

          <div className="space-y-4">
            {buildingNow.map((item, index) => (
              <article
                key={item.name}
                className="ht-panel grid gap-4 p-6 sm:grid-cols-[4rem_1fr] sm:items-start sm:p-8"
              >
                <p className="text-2xl font-semibold text-[var(--ht-accent)]">
                  0
                  {index + 1}
                </p>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-[var(--ht-ink)]">{t(item.name)}</h3>
                    <span className="border-[var(--ht-accent)]/40 border px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ht-accent)]">
                      {t('status_progress')}
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-[var(--ht-faint)]">{t(item.category)}</p>
                  <p className="mb-3 text-[var(--ht-muted)]">{t(item.description)}</p>
                  <p className="text-sm text-[var(--ht-ink)]">
                    <span className="text-[var(--ht-faint)]">
                      {t('next_label')}
                      {' '}
                    </span>
                    {t(item.next)}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Button label={t('browse_work')} variant="secondary" href="/project" />
          </div>
        </div>
      </section>
    </>
  );
};
