'use client';

import { Button } from '@astryxdesign/core/Button';
import { useTranslations } from 'next-intl';

export default function Howweworkstep() {
  const t = useTranslations('Approach');

  const steps = [
    { number: '01', title: 'step1_title', timing: 'step1_timing', body: 'step1_body' },
    { number: '02', title: 'step2_title', timing: 'step2_timing', body: 'step2_body' },
    { number: '03', title: 'step3_title', timing: 'step3_timing', body: 'step3_body' },
    { number: '04', title: 'step4_title', timing: 'step4_timing', body: 'step4_body' },
  ] as const;

  const why = [
    { title: 'why1_title', body: 'why1_body' },
    { title: 'why2_title', body: 'why2_body' },
    { title: 'why3_title', body: 'why3_body' },
  ] as const;

  const faqs = [
    { q: 'faq1_q', a: 'faq1_a' },
    { q: 'faq2_q', a: 'faq2_a' },
    { q: 'faq3_q', a: 'faq3_a' },
    { q: 'faq4_q', a: 'faq4_a' },
  ] as const;

  return (
    <>
      <section className="ht-section">
        <div className="ht-container space-y-6">
          {steps.map(step => (
            <article key={step.number} className="ht-panel grid gap-4 p-6 sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:p-8">
              <p className="text-3xl font-semibold text-[var(--ht-accent)]">{step.number}</p>
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[var(--ht-ink)]">{t(step.title)}</h2>
                <p className="text-[var(--ht-muted)]">{t(step.body)}</p>
              </div>
              <p className="text-sm uppercase tracking-[0.14em] text-[var(--ht-faint)]">{t(step.timing)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-soft)]">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">{t('why_eyebrow')}</p>
          <h2 className="ht-title mb-8">{t('why_title')}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {why.map(item => (
              <article key={item.title} className="ht-panel p-6">
                <h3 className="mb-2 text-lg font-semibold text-[var(--ht-ink)]">{t(item.title)}</h3>
                <p className="text-sm text-[var(--ht-muted)]">{t(item.body)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ht-section">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">{t('faq_eyebrow')}</p>
          <h2 className="ht-title mb-8">{t('faq_title')}</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={faq.q} className="ht-panel group p-5 open:border-[var(--ht-line-strong)]">
                <summary className="cursor-pointer list-none font-semibold text-[var(--ht-ink)]">
                  <span className="mr-3 text-[var(--ht-faint)]">
                    0
                    {index + 1}
                  </span>
                  {t(faq.q)}
                </summary>
                <p className="mt-3 text-[var(--ht-muted)]">{t(faq.a)}</p>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <Button label={t('cta')} variant="primary" size="lg" href="/contacts" />
          </div>
        </div>
      </section>
    </>
  );
}
