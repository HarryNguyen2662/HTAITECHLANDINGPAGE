'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const inputClasses = 'w-full border border-line bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary';

  return (
    <div className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contact
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              Tell us what you're building
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The more specific you are, the faster we can tell you whether
              this is something we can help with. We reply from Đà Nẵng
              within one business day.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form Column */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {(['name', 'email', 'phone', 'service'] as const).map(field => (
                    <div key={field}>
                      <label
                        htmlFor={field}
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                        <span className="ml-1 text-primary">*</span>
                      </label>
                      {field === 'service'
                        ? (
                            <select
                              id={field}
                              name={field}
                              required
                              value={formData[field]}
                              onChange={handleChange}
                              className={inputClasses}
                            >
                              <option value="">Select a service</option>
                              <option value="ai">AI &amp; ML Solutions</option>
                              <option value="web">Web Development</option>
                              <option value="mobile">Mobile Development</option>
                              <option value="other">Other Services</option>
                            </select>
                          )
                        : (
                            <input
                              type={
                                field === 'email'
                                  ? 'email'
                                  : field === 'phone'
                                    ? 'tel'
                                    : 'text'
                              }
                              id={field}
                              name={field}
                              required
                              value={formData[field]}
                              onChange={handleChange}
                              className={inputClasses}
                              placeholder={`Enter your ${field}`}
                            />
                          )}
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Your message
                    {' '}
                    <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`${inputClasses} resize-none`}
                    placeholder="What are you trying to detect, verify, or automate?"
                  />
                </div>

                <div className="space-y-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center gap-2 rounded bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-colors ${
                      isSubmitting
                        ? 'cursor-not-allowed opacity-60'
                        : 'hover:bg-primary/90'
                    }`}
                  >
                    {isSubmitting ? 'Sending…' : 'Send message'}
                  </button>

                  {submitError && (
                    <p className="text-sm text-destructive">{submitError}</p>
                  )}

                  {submitSuccess && (
                    <p className="text-sm text-verify">
                      Message sent. We'll reply within one business day.
                    </p>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Right Column - Offices & Contact Info */}
            <motion.div variants={itemVariants} className="border-l border-line pl-0 lg:pl-12">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Where to find us
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
                    Vietnam — HQ
                  </p>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    123 Ly Dao Thanh, An Hai Bac, Son Tra
                    <br />
                    Da Nang, Vietnam 550000
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-line pt-8">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  Direct
                </p>
                <Link
                  href="mailto:tainguyenhuu@htaitech.net"
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
