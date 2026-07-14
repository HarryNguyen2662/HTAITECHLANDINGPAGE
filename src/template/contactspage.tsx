'use client';

import { Button } from '@astryxdesign/core/Button';
import { useLocale, useTranslations } from 'next-intl';
import React, { useState } from 'react';

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const serviceKeys = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'] as const;

const fieldClass
  = 'ht-contact-field w-full rounded-lg border border-[var(--ht-line)] bg-[var(--ht-bg)] px-4 py-3.5 text-[var(--ht-ink)] outline-none transition-[border-color,box-shadow,background-color] duration-200 placeholder:text-[var(--ht-faint)] focus:border-[var(--ht-accent)] focus:bg-[var(--ht-bg-elevated)] focus:shadow-[0_0_0_3px_rgba(15,118,110,0.12)]';

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  website: '',
};

async function sendViaNetlifyForms(
  formData: ContactFormData,
  locale: string,
) {
  const body = new URLSearchParams({
    'form-name': 'contact',
    'subject': 'New contact from %{formName} (%{submissionId})',
    'bot-field': formData.website,
    'name': formData.name,
    'email': formData.email,
    'phone': formData.phone,
    'service': formData.service,
    'message': formData.message,
    locale,
  });

  // Must POST to the static public HTML file so Netlify Forms handles it
  // (Next.js pages are not scanned / cannot be the form target).
  const response = await fetch('/__forms.html', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  // Netlify returns 200 on success. Local/dev without Netlify may 404/405.
  // Production 404 usually means Form detection is off or needs a redeploy.
  if (!response.ok) {
    throw new Error(`Netlify form error: ${response.status}`);
  }
}

export const ContactForm = () => {
  const t = useTranslations('ContactPage');
  const locale = useLocale();
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Honeypot: pretend success for bots
      if (formData.website.trim()) {
        setSubmitSuccess(true);
        setFormData(emptyForm);
        return;
      }

      await sendViaNetlifyForms(formData, locale);
      setSubmitSuccess(true);
      setFormData(emptyForm);
    } catch {
      setSubmitError(t('error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="ht-contact relative overflow-hidden border-b border-[var(--ht-line)]">
      <div className="ht-contact-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="ht-contact-grid pointer-events-none absolute inset-0 opacity-35" aria-hidden />

      <div className="ht-container relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-24">
        <div className="ht-fade-up max-w-xl">
          <p className="ht-eyebrow mb-5">{t('brand')}</p>
          <h1 className="ht-display mb-6">{t('title')}</h1>
          <p className="ht-lede mb-10">{t('description')}</p>

          <div className="space-y-8 border-t border-[var(--ht-line)] pt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-faint)]">
              {t('direct_line')}
            </p>

            <div className="ht-contact-meta">
              <p className="ht-eyebrow mb-2">{t('office')}</p>
              <p className="text-lg font-semibold tracking-tight text-[var(--ht-ink)]">
                {t('vietnam')}
              </p>
              <p className="mt-2 max-w-sm leading-relaxed text-[var(--ht-muted)]">
                {t('address')}
              </p>
            </div>

            <div className="ht-contact-meta" style={{ animationDelay: '120ms' }}>
              <p className="ht-eyebrow mb-2">{t('email_label')}</p>
              <a
                href="mailto:tainguyenhuu@htaitech.org"
                className="inline-block text-lg font-semibold tracking-tight text-[var(--ht-ink)] no-underline transition-colors duration-200 hover:text-[var(--ht-accent)]"
              >
                tainguyenhuu@htaitech.org
              </a>
            </div>

            <div className="ht-contact-meta" style={{ animationDelay: '180ms' }}>
              <p className="ht-eyebrow mb-2">{t('phone_label')}</p>
              <a
                href="tel:+84905103928"
                className="inline-block text-lg font-semibold tracking-tight text-[var(--ht-ink)] no-underline transition-colors duration-200 hover:text-[var(--ht-accent)]"
              >
                +84 905103928
              </a>
            </div>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          onSubmit={handleSubmit}
          className="ht-contact-form ht-fade-up bg-[var(--ht-bg-elevated)]/90 relative rounded-2xl border border-[var(--ht-line)] p-6 shadow-[0_24px_60px_-36px_rgba(18,22,28,0.35)] backdrop-blur-sm sm:p-8"
          style={{ animationDelay: '80ms' }}
        >
          {/* form-name / honeypot live in public/__forms.html for Netlify detection */}
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="hidden"
            name="subject"
            value="New contact from %{formName} (%{submissionId})"
          />
          <p className="hidden" aria-hidden>
            <label>
              Don’t fill this out:
              <input
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={e => setFormData(prev => ({ ...prev, website: e.target.value }))}
              />
            </label>
          </p>

          <div className="mb-7">
            <h2 className="ht-title text-[1.75rem] sm:text-[2rem]">{t('form_title')}</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="ht-contact-label block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-[var(--ht-ink)]">
                {t('name')}
              </span>
              <input
                required
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder={t('name_placeholder')}
                className={fieldClass}
              />
            </label>

            <label className="ht-contact-label block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-[var(--ht-ink)]">
                {t('email')}
              </span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder={t('email_placeholder')}
                className={fieldClass}
              />
            </label>

            <label className="ht-contact-label block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-[var(--ht-ink)]">
                {t('phone')}
              </span>
              <input
                required
                type="tel"
                name="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder={t('phone_placeholder')}
                className={fieldClass}
              />
            </label>

            <label className="ht-contact-label block sm:col-span-1">
              <span className="mb-2 block text-sm font-medium text-[var(--ht-ink)]">
                {t('service')}
              </span>
              <select
                required
                id="contact-service"
                name="service"
                value={formData.service}
                onChange={e => setFormData(prev => ({ ...prev, service: e.target.value }))}
                className={`${fieldClass} appearance-none bg-[length:1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' fill=\'none\' stroke=\'%236b7280\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'m4 6 4 4 4-4\'/%3E%3C/svg%3E")',
                }}
              >
                <option value="">{t('service_placeholder')}</option>
                {serviceKeys.map(key => (
                  <option key={key} value={t(key)}>
                    {t(key)}
                  </option>
                ))}
              </select>
            </label>

            <label className="ht-contact-label block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-[var(--ht-ink)]">
                {t('message')}
              </span>
              <textarea
                required
                name="message"
                rows={5}
                value={formData.message}
                onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                placeholder={t('message_placeholder')}
                className={`${fieldClass} min-h-[8.5rem] resize-y`}
              />
            </label>
          </div>

          {submitError && (
            <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
              {submitError}
            </p>
          )}
          {submitSuccess && (
            <p className="mt-4 text-sm font-medium text-[var(--ht-accent)]" role="status">
              {t('success')}
            </p>
          )}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button
              label={isSubmitting ? t('sending') : t('send')}
              variant="primary"
              type="submit"
              size="lg"
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
            />
            <p className="text-sm text-[var(--ht-faint)] sm:text-right">
              {t('response_note')}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
