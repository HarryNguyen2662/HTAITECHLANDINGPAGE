'use client';

import { Button } from '@astryxdesign/core/Button';
import { Text } from '@astryxdesign/core/Text';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const steps = [
  { title: 'step1_title', description: 'step1_description', href: '/howwework' },
  { title: 'step2_title', description: 'step2_description', href: '/howwework' },
  { title: 'step3_title', description: 'step3_description', href: '/services' },
  { title: 'step4_title', description: 'step4_description', href: '/project' },
] as const;

export const Services = () => {
  const t = useTranslations('Services');

  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="mb-12 max-w-2xl">
          <p className="ht-eyebrow mb-3">{t('section_eyebrow')}</p>
          <h2 className="ht-title mb-4">{t('section_title')}</h2>
          <Text type="large" color="secondary" as="p">
            {t('section_description')}
          </Text>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="ht-fade-up group border-t border-[var(--ht-line)] pt-6"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-muted)]">
                0
                {index + 1}
              </p>
              <h3
                className="mb-3 text-2xl font-semibold tracking-tight text-[var(--ht-ink)]"
                style={{ fontFamily: 'Georgia, \'Times New Roman\', serif' }}
              >
                {t(step.title)}
              </h3>
              <Text type="body" color="secondary" as="p">
                {t(step.description)}
              </Text>
              <div className="mt-5">
                <Link
                  href={step.href}
                  className="text-sm font-medium text-[var(--ht-accent)] no-underline hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Button label="See all services" variant="secondary" href="/services" />
        </div>
      </div>
    </section>
  );
};
