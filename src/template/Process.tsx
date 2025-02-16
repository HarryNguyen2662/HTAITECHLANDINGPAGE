'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Section } from '@/features/landing/Section';

type FeatureCardProps = {
  number: number;
  title: string;
  children: React.ReactNode;
  index: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  number,
  title,
  children,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-20% 0px' }}
    transition={{ delay: index * 0.2, type: 'spring', stiffness: 100 }}
    className="group relative rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:-translate-y-2 hover:border-transparent hover:shadow-2xl"
    style={{
      background:
				'linear-gradient(white, white) padding-box, linear-gradient(to right, #4F46E5, #EC4899) border-box',
      border: '2px solid transparent',
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 transition-opacity group-hover:opacity-100" />
    <div className="relative z-10 flex items-start gap-6">
      <motion.span
        className="flex size-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {number}
      </motion.span>
      <div className="flex-1">
        <h3 className="mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
          {title}
        </h3>
        <p className="leading-relaxed text-gray-600">{children}</p>
      </div>
    </div>
  </motion.div>
);

const processSteps = [
  {
    number: 1,
    title: 'Step 1: Initial Consultation',
    content: 'We begin with a detailed consultation to understand your needs and goals.',
  },
  {
    number: 2,
    title: 'Step 2: Planning and Strategy',
    content: 'Our team develops a comprehensive plan and strategy tailored to your project.',
  },
  {
    number: 3,
    title: 'Step 3: Design and Development',
    content: 'We design and develop your software with precision and expertise.',
  },
  {
    number: 4,
    title: 'Step 4: Testing and Deployment',
    content: 'Thorough testing and seamless deployment ensure your software is ready for use.',
  },
];

export const Process = () => {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50/50 to-purple-50/50 py-20">
      <div className="absolute inset-0 opacity-10 [background:radial-gradient(800px_at_50%_50%,#4F46E5_0%,transparent_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Section
          title="Welcome to H&T AI Tech: Where Innovation Takes Center Stage!"
          description="Start Your Software Development Journey with Us"
          titleClassName="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-4xl font-bold mb-6"
          descriptionClassName="text-xl text-gray-500 mb-12 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image Section */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className="hover:shadow-3xl relative overflow-hidden rounded-3xl border-[3px] border-white/20 shadow-2xl backdrop-blur-sm transition-all duration-500">
                <Image
                  src="/assets/images/colab.jpg"
                  alt="Innovation Image"
                  width={720}
                  height={480}
                  className="group-hover:scale-102 aspect-video h-auto w-full object-cover transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Text Content */}
              <motion.div
                className="mt-8 px-4 lg:px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-justify text-lg leading-relaxed tracking-wide text-gray-600 lg:text-xl">
                  At
                  {' '}
                  <span className="font-semibold text-blue-600">
                    H&T AI Tech
                  </span>
                  , we know that the initial stages of onboarding and scaling
                  up are crucial for any software development project. Our
                  detailed and methodical approach ensures that every project
                  is launched and carried out with
                  {' '}
                  <span className="font-medium text-purple-600">
                    precision
                  </span>
                  , paving the way for success. Here's our process:
                </p>
              </motion.div>
            </motion.div>

            {/* Process Timeline */}
            <div className="relative lg:pl-8 xl:pl-12">
              {/* Decorative Timeline */}
              <motion.div
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true }}
              >
                {/* Timeline Decorations */}
                <div className="absolute -top-2 left-1/2 size-4 -translate-x-1/2 rounded-full bg-blue-500 shadow-lg" />
                <div className="absolute -bottom-2 left-1/2 size-4 -translate-x-1/2 rounded-full bg-purple-500 shadow-lg" />
              </motion.div>

              {/* Process Steps */}
              <div className="relative z-10 space-y-8 pl-8 sm:pl-10">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.15,
                      type: 'spring',
                      stiffness: 120,
                    }}
                    viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                  >
                    <div className="relative pl-6">
                      {/* Step Number */}
                      <div className="absolute left-0 top-0 flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 font-bold text-white shadow-lg">
                        {step.number}
                      </div>

                      {/* Content Card */}
                      <div className="rounded-2xl border border-gray-100/80 bg-white p-6 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                        <h3 className="mb-3 text-xl font-bold text-gray-800">
                          {step.title}
                        </h3>
                        <p className="leading-relaxed tracking-wide text-gray-600">
                          {step.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 px-10 py-4 text-xl font-semibold text-white shadow-lg hover:shadow-xl"
          >
            <Link href="/contacts" passHref legacyBehavior>
              <a className="block size-full">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Contact us now to Experience the H&T AI TECH Advantage
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </motion.svg>
                </span>
              </a>
            </Link>
            <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity hover:opacity-20" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

// Tailwind CSS Configuration for Animations (Add to tailwind.config.js)
/*
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
*/
