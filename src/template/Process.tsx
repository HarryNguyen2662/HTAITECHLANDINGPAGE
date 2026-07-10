'use client';

import { Button } from '@astryxdesign/core/Button';
import { Text } from '@astryxdesign/core/Text';
import { useTranslations } from 'next-intl';

const stepKeys = [
  { title: 'step1_title', description: 'step1_description' },
  { title: 'step2_title', description: 'step2_description' },
  { title: 'step3_title', description: 'step3_description' },
  { title: 'step4_title', description: 'step4_description' },
] as const;

export const Process = () => {
  const t = useTranslations('Process');

  return (
    <section
      className="ht-section border-y border-[var(--ht-line)]"
      style={{ backgroundColor: 'rgba(239, 234, 227, 0.5)' }}
    >
      <div className="ht-container">
        <div className="mb-12 max-w-2xl">
          <p className="ht-eyebrow mb-3">{t('eyebrow')}</p>
          <h2 className="ht-title mb-4">{t('title')}</h2>
          <Text type="large" color="secondary" as="p">
            {t('description')}
          </Text>
        </div>

        <ol className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stepKeys.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="mb-4 flex size-10 items-center justify-center rounded-full bg-[var(--ht-ink)] text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[var(--ht-ink)]">
                {t(step.title)}
              </h3>
              <Text type="body" color="secondary" as="p">
                {t(step.description)}
              </Text>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Button label={t('cta')} variant="primary" href="/contacts" />
        </div>
      </div>
    </section>
  );
};
