'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import { Section } from '@/features/landing/Section';

const processSteps = [
  {
    number: 1,
    title: 'Understand the problem',
    content: 'We start by understanding what you\'re actually trying to detect, verify, or automate — and whether AI is even the right tool for it.',
  },
  {
    number: 2,
    title: 'Scope a real plan',
    content: 'A plan and timeline built around your data, infrastructure, and constraints — not a template we reuse for every client.',
  },
  {
    number: 3,
    title: 'Build against real data',
    content: 'Our engineers iterate against your actual data from day one, with regular checkpoints so you\'re never surprised by the result.',
  },
  {
    number: 4,
    title: 'Test, deploy, support',
    content: 'We test under production conditions, then deploy and stay on to support the system once it\'s live.',
  },
];

export const Process = () => {
  return (
    <div className="w-full bg-secondary py-20">
      <Section
        subtitle="How we start"
        title="From first call to shipped system"
        description="No discovery-phase theater. Here's exactly what happens after you reach out."
      >
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          >
            <div className="border border-line">
              <Image
                src="/assets/images/colab.jpg"
                alt="H&T engineers reviewing a project together"
                width={720}
                height={480}
                className="aspect-video h-auto w-full object-cover grayscale"
              />
            </div>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              At
              {' '}
              <span className="font-medium text-foreground">H&T AI Tech</span>
              , onboarding is where most vendor relationships either earn trust
              or lose it. We treat it that way — every project starts the same
              methodical four steps, whether you're evaluating us for a pilot
              or handing over production infrastructure.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="relative pl-2">
            <div className="relative space-y-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  className="relative flex gap-5"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true, margin: '0px 0px -50px 0px' }}
                >
                  <div className="flex flex-col items-center">
                    <span className="border-ink text-ink flex size-9 shrink-0 items-center justify-center border font-mono text-sm font-medium">
                      {String(step.number).padStart(2, '0')}
                    </span>
                    {index < processSteps.length - 1 && (
                      <span className="mt-2 w-px flex-1 bg-line" aria-hidden="true" />
                    )}
                  </div>

                  <div className="pb-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">
                      {step.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
