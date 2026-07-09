'use client';

import { Heading } from '@astryxdesign/core/Heading';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

const processSteps = [
  {
    number: 1,
    title: 'Understand the problem',
    content: 'We start by understanding what you\'re actually trying to detect, verify, or automate, and whether AI is even the right tool for it.',
  },
  {
    number: 2,
    title: 'Scope a real plan',
    content: 'A plan and timeline built around your data, infrastructure, and constraints, not a template we reuse for every client.',
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
    <Section variant="muted" padding={0} className="px-3 py-20">
      <div className="mx-auto mb-12 max-w-screen-md text-center">
        <Text type="label" color="secondary" className="font-mono text-xs uppercase tracking-[0.2em]">
          How we start
        </Text>
        <Heading level={2} className="mt-2 font-display text-3xl font-semibold">
          From first call to shipped system
        </Heading>
        <Text type="large" color="secondary" className="mt-2 block">
          No discovery-phase theater. Here&apos;s exactly what happens after you reach out.
        </Text>
      </div>

      <div className="mx-auto grid max-w-screen-lg grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
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
              className="aspect-video h-auto w-full object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
            />
          </div>

          <Text type="large" color="secondary" className="mt-6 block leading-relaxed">
            At
            {' '}
            <span className="font-medium text-foreground">H&T AI Tech</span>
            , onboarding is where most vendor relationships either earn trust
            or lose it. We treat it that way: every project starts the same
            methodical four steps, whether you're evaluating us for a pilot
            or handing over production infrastructure.
          </Text>
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
                  <Text type="label" color="inherit" as="span" className="flex size-9 shrink-0 items-center justify-center border border-ink font-mono text-sm text-ink">
                    {String(step.number).padStart(2, '0')}
                  </Text>
                  {index < processSteps.length - 1 && (
                    <span className="mt-2 w-px flex-1 bg-line" aria-hidden="true" />
                  )}
                </div>

                <div className="pb-2">
                  <Heading level={3} className="font-display text-xl font-semibold">
                    {step.title}
                  </Heading>
                  <Text type="body" color="secondary" className="mt-2 block leading-relaxed">
                    {step.content}
                  </Text>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
