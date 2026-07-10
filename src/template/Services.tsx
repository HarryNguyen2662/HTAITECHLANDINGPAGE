'use client';

import { Button } from '@astryxdesign/core/Button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const services = [
  { tag: 'hire_tag', title: 'hire_title', description: 'hire_description', href: '/howwework' },
  { tag: 'product_tag', title: 'product_title', description: 'product_description', href: '/services' },
  { tag: 'agentic_tag', title: 'agentic_title', description: 'agentic_description', href: '/services' },
  { tag: 'cloud_tag', title: 'cloud_title', description: 'cloud_description', href: '/services' },
] as const;

export const Services = () => {
  const tHome = useTranslations('HomeServices');
  const t = useTranslations('ServicesCatalog');

  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="mb-12 max-w-2xl">
          <p className="ht-eyebrow mb-3">{tHome('eyebrow')}</p>
          <h2 className="ht-title mb-4">{tHome('title')}</h2>
          <p className="ht-lede">{tHome('description')}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="ht-panel p-6 transition-colors hover:border-[var(--ht-line-strong)] sm:p-8"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-accent)]">
                {t(service.tag)}
              </p>
              <h3 className="mb-3 text-2xl font-semibold tracking-tight text-[var(--ht-ink)]">
                {t(service.title)}
              </h3>
              <p className="mb-5 text-[var(--ht-muted)]">{t(service.description)}</p>
              <Link
                href={service.href}
                className="text-sm font-medium text-[var(--ht-ink)] no-underline hover:text-[var(--ht-accent)]"
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Button label="See all services" variant="secondary" href="/services" />
        </div>
      </div>
    </section>
  );
};
