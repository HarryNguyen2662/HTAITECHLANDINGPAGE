'use client';

import { Button } from '@astryxdesign/core/Button';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const pillars = [
  { title: 'p1_title', description: 'p1_description' },
  { title: 'p2_title', description: 'p2_description' },
  { title: 'p3_title', description: 'p3_description' },
  { title: 'p4_title', description: 'p4_description' },
] as const;

const teamMembers = [
  {
    key: 'tai',
    href: 'https://www.linkedin.com/in/tai-nguyen-huu-69979570/',
    image: '/assets/images/chutai.png',
  },
  {
    key: 'chien',
    image: '/assets/images/chuchien.png',
  },
  {
    key: 'minh',
    href: 'https://www.linkedin.com/in/quang-minh%EF%BC%88%E3%83%9F%E3%83%B3%EF%BC%89-a9395027/',
    image: '/assets/images/chuminh.png',
  },
  {
    key: 'tam',
    image: '/assets/images/chutam.png',
  },
] as const;

export const AboutUs = () => {
  const t = useTranslations('AboutPage');

  return (
    <div>
      <section className="border-b border-[var(--ht-line)]">
        <div className="ht-container py-20 sm:py-28">
          <div className="ht-fade-up max-w-3xl">
            <p className="ht-eyebrow mb-4">{t('eyebrow')}</p>
            <h1 className="ht-display mb-6">{t('title')}</h1>
            <p className="ht-lede">{t('description')}</p>
          </div>
        </div>
      </section>

      <section className="ht-section">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">{t('principles_eyebrow')}</p>
          <h2 className="ht-title mb-10">{t('principles_title')}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pillars.map(pillar => (
              <article key={pillar.title} className="ht-panel p-6">
                <h3 className="mb-3 text-xl font-semibold text-[var(--ht-ink)]">
                  {t(pillar.title)}
                </h3>
                <p className="text-[var(--ht-muted)]">{t(pillar.description)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-soft)]">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">{t('team_eyebrow')}</p>
          <h2 className="ht-title mb-10">{t('team_title')}</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map(member => (
              <article key={member.key} className="flex gap-5">
                <div className="relative size-24 shrink-0 overflow-hidden bg-[var(--ht-bg-elevated)] sm:size-28">
                  <Image
                    src={member.image}
                    alt={t(`team.${member.key}.name`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ht-ink)]">
                    {t(`team.${member.key}.name`)}
                  </h3>
                  <p className="mb-2 text-sm text-[var(--ht-accent)]">
                    {t(`team.${member.key}.role`)}
                  </p>
                  <p className="text-sm text-[var(--ht-muted)]">
                    {t(`team.${member.key}.bio`)}
                  </p>
                  {'href' in member && member.href && (
                    <a
                      href={member.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-[var(--ht-ink)] no-underline hover:text-[var(--ht-accent)]"
                    >
                      {t('linkedin')}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ht-section">
        <div className="ht-container max-w-3xl">
          <h2 className="ht-title mb-4">{t('cta_title')}</h2>
          <p className="ht-lede mb-8">{t('cta_description')}</p>
          <Button label={t('cta_button')} variant="primary" href="/contacts" />
        </div>
      </section>
    </div>
  );
};
