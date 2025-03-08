'use client';

import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120 },
    },
  };

  const hoverEffect = {
    hover: {
      y: -5,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          {/* Contact Form Column */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-white/20 bg-white p-10 shadow-2xl backdrop-blur-lg"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent">
                Transform Your Vision into Reality
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Let's collaborate to create something impactful and meaningful.
                Turn your project dreams into tangible success.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  {['name', 'email', 'phone', 'service'].map(field => (
                    <motion.div
                      key={field}
                      variants={itemVariants}
                      className="relative"
                    >
                      <label
                        htmlFor={field}
                        className="mb-3 block text-sm font-medium text-gray-700"
                      >
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                        <span className="ml-1 text-red-500">*</span>
                      </label>
                      {field === 'service'
                        ? (
                            <select
                              id={field}
                              name={field}
                              required
                              value={formData[field as keyof typeof formData]}
                              onChange={handleChange}
                              className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 text-gray-700 transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                            >
                              <option value="">Select a service</option>
                              <option value="ai">AI & ML Solutions</option>
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
                              value={formData[field as keyof typeof formData]}
                              onChange={handleChange}
                              className="w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-4 text-gray-700 transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                              placeholder={`Enter your ${field}`}
                            />
                          )}
                    </motion.div>
                  ))}
                </div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium text-gray-700"
                  >
                    Your Message
                    {' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full resize-none rounded-xl border-2 border-gray-200 bg-white px-5 py-4 text-gray-700 transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    placeholder="Tell us about your project"
                  />
                </motion.div>

                <div className="space-y-4">
                  <motion.button
                    whileHover={!isSubmitting ? 'hover' : undefined}
                    variants={hoverEffect}
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex w-full items-center justify-center space-x-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-5 font-semibold text-white transition-all duration-300 ${
                      isSubmitting
                        ? 'cursor-not-allowed opacity-50'
                        : 'hover:shadow-xl'
                    }`}
                  >
                    {isSubmitting
                      ? (
                          <span>Sending...</span>
                        )
                      : (
                          <>
                            <span>Send Message</span>
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              initial={{ x: 0 }}
                              animate={{ x: 5 }}
                              transition={{ repeat: Infinity, duration: 1 }}
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </motion.svg>
                          </>
                        )}
                  </motion.button>

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-red-500"
                    >
                      {submitError}
                    </motion.div>
                  )}

                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-green-600"
                    >
                      Message sent successfully! We'll contact you soon.
                    </motion.div>
                  )}
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Right Column - Offices & Contact Info */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-white/20 bg-white p-10 shadow-2xl backdrop-blur-lg"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-10"
            >
              <h3 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-3xl font-bold text-transparent">
                Our Global Presence
              </h3>

              {[
                {
                  flag: '🇻🇳',
                  country: 'Vietnam',
                  address: [
                    '123 Ly Dao Thanh, An Hai Bac, Son Tra, Da Nang',
                  ],
                },
              ].map(office => (
                <motion.div
                  key={office.country}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-5 rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6"
                >
                  <div className="shrink-0 text-3xl">{office.flag}</div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-gray-900">
                      {office.country}
                    </h4>
                    {office.address.map((line, i) => (
                      <p key={i} className="leading-relaxed text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}

              <div className="pt-10">
                <h3 className="mb-5 text-xl font-bold text-gray-900">
                  Let's Connect
                </h3>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:tainguyenhuu@htaitech.net"
                  className="inline-flex items-center space-x-2 text-lg font-medium text-purple-600 hover:text-purple-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>tainguyenhuu@htaitech.net</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
