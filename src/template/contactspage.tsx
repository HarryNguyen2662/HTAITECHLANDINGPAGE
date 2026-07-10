'use client';

import { Button } from '@astryxdesign/core/Button';
import { TextArea } from '@astryxdesign/core/TextArea';
import { TextInput } from '@astryxdesign/core/TextInput';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const serviceKeys = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9'] as const;

export const ContactForm = () => {
  const t = useTranslations('ContactPage');
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const contentType = response.headers.get('content-type');
      let result;
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Unexpected response: ${text.slice(0, 100)}`);
      }

      if (!response.ok || !result.success) {
        throw new Error(result.error || `Server error: ${response.status}`);
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="ht-container grid gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          <form onSubmit={handleSubmit} className="ht-panel space-y-5 p-6 sm:p-8">
            <TextInput
              label={t('name')}
              isRequired
              value={formData.name}
              changeAction={value => setFormData(prev => ({ ...prev, name: value }))}
              placeholder={t('name_placeholder')}
              size="lg"
            />
            <TextInput
              label={t('email')}
              type="email"
              isRequired
              value={formData.email}
              changeAction={value => setFormData(prev => ({ ...prev, email: value }))}
              placeholder={t('email_placeholder')}
              size="lg"
            />
            <TextInput
              label={t('phone')}
              isRequired
              value={formData.phone}
              changeAction={value => setFormData(prev => ({ ...prev, phone: value }))}
              placeholder={t('phone_placeholder')}
              size="lg"
            />
            <div>
              <label
                htmlFor="contact-service"
                className="mb-2 block text-sm font-medium text-[var(--ht-ink)]"
              >
                {t('service')}
              </label>
              <select
                id="contact-service"
                required
                value={formData.service}
                onChange={e => setFormData(prev => ({ ...prev, service: e.target.value }))}
                className="w-full rounded-md border border-[var(--ht-line)] bg-[var(--ht-bg)] p-3 text-[var(--ht-ink)] outline-none focus:border-[var(--ht-accent)]"
              >
                <option value="">{t('service_placeholder')}</option>
                {serviceKeys.map(key => (
                  <option key={key} value={t(key)}>
                    {t(key)}
                  </option>
                ))}
              </select>
            </div>
            <TextArea
              label={t('message')}
              isRequired
              value={formData.message}
              changeAction={value => setFormData(prev => ({ ...prev, message: value }))}
              placeholder={t('message_placeholder')}
              size="lg"
              rows={5}
            />

            {submitError && <p className="text-sm text-red-400">{submitError}</p>}
            {submitSuccess && (
              <p className="text-sm text-[var(--ht-accent)]">{t('success')}</p>
            )}

            <Button
              label={isSubmitting ? t('sending') : t('send')}
              variant="primary"
              type="submit"
              size="lg"
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
            />
          </form>

          <aside className="space-y-8">
            <div className="ht-panel p-6">
              <p className="ht-eyebrow mb-3">{t('office')}</p>
              <h2 className="mb-3 text-2xl font-semibold text-[var(--ht-ink)]">
                {t('vietnam')}
              </h2>
              <p className="text-[var(--ht-muted)]">{t('address')}</p>
            </div>
            <div className="ht-panel p-6">
              <p className="ht-eyebrow mb-3">{t('email_label')}</p>
              <a
                href="mailto:tainguyenhuu@htaitech.net"
                className="text-lg text-[var(--ht-ink)] no-underline hover:text-[var(--ht-accent)]"
              >
                tainguyenhuu@htaitech.net
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
