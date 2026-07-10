'use client';

import { Button } from '@astryxdesign/core/Button';
import { Text } from '@astryxdesign/core/Text';
import { useTranslations } from 'next-intl';

export const ProjectTeaser = () => {
  const t = useTranslations('ProjectTeaser');

  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="ht-eyebrow mb-3">{t('eyebrow')}</p>
            <h2 className="ht-title mb-4">{t('title')}</h2>
            <Text type="large" color="secondary" as="p">
              {t('description')}
            </Text>
          </div>
          <div className="flex lg:justify-end">
            <Button label={t('cta')} variant="secondary" size="lg" href="/project" />
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Helmet detection', metric: '92% accuracy' },
            { label: 'Container inspection', metric: '−70% time' },
            { label: 'Traffic enforcement', metric: '96.7% detection' },
          ].map(item => (
            <div
              key={item.label}
              className="border border-[var(--ht-line)] bg-white/60 px-5 py-6"
            >
              <p className="text-sm text-[var(--ht-muted)]">{item.label}</p>
              <p
                className="mt-2 text-2xl font-semibold text-[var(--ht-ink)]"
                style={{ fontFamily: 'Georgia, \'Times New Roman\', serif' }}
              >
                {item.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
