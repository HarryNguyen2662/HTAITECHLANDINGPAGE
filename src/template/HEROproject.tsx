'use client';

import { Button } from '@astryxdesign/core/Button';
import { HStack } from '@astryxdesign/core/HStack';
import { useTranslations } from 'next-intl';

export const ProjectHero = () => {
  const t = useTranslations('WorkPage');

  return (
    <section className="border-b border-[var(--ht-line)]">
      <div className="ht-container py-20 sm:py-28">
        <div className="ht-fade-up max-w-3xl">
          <p className="ht-eyebrow mb-4">{t('eyebrow')}</p>
          <h1 className="ht-display mb-6">{t('title')}</h1>
          <p className="ht-lede mb-8">{t('description')}</p>
          <HStack gap={3} wrap="wrap">
            <Button label={t('primary')} variant="primary" size="lg" href="#projects" />
            <Button label={t('secondary')} variant="secondary" size="lg" href="/contacts" />
          </HStack>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
