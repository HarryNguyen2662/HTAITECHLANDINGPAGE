import { Heading } from '@astryxdesign/core/Heading';
import { Icon } from '@astryxdesign/core/Icon';
import { Link } from '@astryxdesign/core/Link';
import { Text } from '@astryxdesign/core/Text';
import Image from 'next/image';
import React from 'react';

const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4 flex items-center gap-3">
    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-verify">
      <Icon icon="check" color="inherit" size="sm" className="text-verify-foreground" />
    </div>
    <Text type="large" color="inherit" className="text-paper">{children}</Text>
  </div>
);

export const WhatWeProvide = () => {
  return (
    <div className="w-full bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl">
          <Text type="label" color="secondary" className="block font-mono text-xs uppercase tracking-[0.15em]">
            How engagements run
          </Text>
          <Heading level={2} className="mt-2 font-display text-3xl font-semibold">
            What to expect
          </Heading>
          <Text type="large" color="secondary" className="mt-4 block">
            We start every project with a discovery phase, understanding
            your objectives, timelines, and key deliverables before any
            code gets written.
          </Text>
        </div>

        <div className="flex flex-col items-stretch gap-8 lg:flex-row">
          <div className="relative h-[500px] flex-1 overflow-hidden border border-line">
            <Image
              src="/assets/images/teamservice.png"
              alt="H&T team working through an agile planning session"
              fill
              className="object-cover object-left-top grayscale transition-[filter] duration-500 hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex-1 bg-ink p-10">
            <Heading level={3} color="inherit" className="font-display text-2xl font-semibold text-paper">
              Scrum &amp; agile methodology
            </Heading>
            <Text type="large" color="inherit" className="mb-8 mt-3 block leading-relaxed text-paper/70">
              With our streamlined process, clients can expect:
            </Text>

            <div className="mb-8 space-y-4">
              <CheckItem>Efficient project management</CheckItem>
              <CheckItem>Accelerated timelines</CheckItem>
              <CheckItem>Results that consistently exceed expectations</CheckItem>
            </div>

            <Link
              href="/contacts"
              color="inherit"
              className="block w-full bg-primary px-8 py-4 text-center text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Talk to the team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
