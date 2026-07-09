'use client';

import { TextArea } from '@astryxdesign/core';
import { Button } from '@astryxdesign/core/Button';
import { Heading } from '@astryxdesign/core/Heading';
import { Link } from '@astryxdesign/core/Link';
import type { SelectorOptionType } from '@astryxdesign/core/Selector';
import { Selector } from '@astryxdesign/core/Selector';
import { Text } from '@astryxdesign/core/Text';
import { TextInput } from '@astryxdesign/core/TextInput';
import { motion, type Variants } from 'framer-motion';
import React, { useState } from 'react';

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const serviceOptions: SelectorOptionType[] = [
  { value: 'ai', label: 'AI & ML Solutions' },
  { value: 'web', label: 'Web Development' },
  { value: 'mobile', label: 'Mobile Development' },
  { value: 'other', label: 'Other Services' },
];

function isValidEmail(email: string): boolean {
  const at = email.indexOf('@');
  if (at <= 0 || at === email.length - 1) {
    return false;
  }
  const domain = email.slice(at + 1);
  return domain.includes('.') && !domain.startsWith('.') && !domain.endsWith('.');
}

export const ContactForm = () => {
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
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const updateField = (field: keyof ContactFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validate = (): Partial<Record<keyof ContactFormData, string>> => {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) {
      errors.name = 'Enter your name';
    }
    if (!formData.email.trim()) {
      errors.email = 'Enter your email';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Enter a valid email';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Enter your phone number';
    }
    if (!formData.service) {
      errors.service = 'Select a service';
    }
    if (!formData.message.trim()) {
      errors.message = 'Enter a message';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

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
      setFieldErrors({});
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const errorStatus = (field: keyof ContactFormData) =>
    fieldErrors[field] ? { type: 'error' as const, message: fieldErrors[field] } : undefined;

  return (
    <div className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <Text type="label" color="secondary" className="font-mono text-xs uppercase tracking-[0.2em]">
              Contact
            </Text>
            <Heading level={1} className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              Tell us what you're building
            </Heading>
            <Text type="large" color="secondary" className="mt-4 block text-lg">
              The more specific you are, the faster we can tell you whether
              this is something we can help with. We reply from Đà Nẵng
              within one business day.
            </Text>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form Column */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <TextInput
                    label="Name"
                    htmlName="name"
                    value={formData.name}
                    onChange={updateField('name')}
                    isRequired
                    placeholder="Enter your name"
                    status={errorStatus('name')}
                  />
                  <TextInput
                    label="Email"
                    htmlName="email"
                    type="email"
                    value={formData.email}
                    onChange={updateField('email')}
                    isRequired
                    placeholder="Enter your email"
                    status={errorStatus('email')}
                  />
                  <TextInput
                    label="Phone"
                    htmlName="phone"
                    value={formData.phone}
                    onChange={updateField('phone')}
                    isRequired
                    placeholder="Enter your phone"
                    status={errorStatus('phone')}
                  />
                  <Selector
                    label="Service"
                    htmlName="service"
                    options={serviceOptions}
                    value={formData.service}
                    onChange={value => updateField('service')(value ?? '')}
                    isRequired
                    placeholder="Select a service"
                    status={errorStatus('service')}
                  />
                </div>

                <TextArea
                  label="Your message"
                  htmlName="message"
                  value={formData.message}
                  onChange={updateField('message')}
                  isRequired
                  rows={6}
                  placeholder="What are you trying to detect, verify, or automate?"
                  status={errorStatus('message')}
                />

                <div className="space-y-4">
                  <Button
                    type="submit"
                    label={isSubmitting ? 'Sending…' : 'Send message'}
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    className="rounded px-8"
                  />

                  {submitError && (
                    <Text type="body" size="sm" color="inherit" className="block text-destructive">
                      {submitError}
                    </Text>
                  )}

                  {submitSuccess && (
                    <Text type="body" size="sm" color="inherit" className="block text-verify">
                      Message sent. We'll reply within one business day.
                    </Text>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Right Column - Offices & Contact Info */}
            <motion.div variants={itemVariants} className="border-l border-line pl-0 lg:pl-12">
              <Heading level={2} className="font-display text-xl font-semibold">
                Where to find us
              </Heading>

              <div className="mt-6 space-y-6">
                <div>
                  <Text type="label" color="accent" className="font-mono text-xs uppercase tracking-[0.15em]">
                    Vietnam — HQ
                  </Text>
                  <Text type="body" color="secondary" className="mt-2 block leading-relaxed">
                    123 Ly Dao Thanh, An Hai Bac, Son Tra
                    <br />
                    Da Nang, Vietnam 550000
                  </Text>
                </div>
              </div>

              <div className="mt-10 border-t border-line pt-8">
                <Text type="label" color="secondary" className="block font-mono text-xs uppercase tracking-[0.15em]">
                  Direct
                </Text>
                <Link
                  href="mailto:tainguyenhuu@htaitech.net"
                  color="inherit"
                  isStandalone
                  className="mt-2 inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary"
                >
                  tainguyenhuu@htaitech.net
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
