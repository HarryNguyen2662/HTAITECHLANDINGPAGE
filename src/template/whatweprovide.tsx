'use client';

import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4 flex items-center gap-3">
    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-verify">
      <Check className="size-4 text-verify-foreground" />
    </div>
    <span className="text-paper text-lg">{children}</span>
  </div>
);

export const WhatWeProvide = () => {
  return (
    <div className="w-full bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            How engagements run
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-foreground">
            What to expect
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We start every project with a discovery phase — understanding
            your objectives, timelines, and key deliverables — before any
            code gets written.
          </p>
        </div>

        <div className="flex flex-col items-stretch gap-8 lg:flex-row">
          <div className="relative h-[500px] flex-1 overflow-hidden border border-line">
            <Image
              src="/assets/images/teamservice.png"
              alt="H&T team working through an agile planning session"
              fill
              className="object-cover object-left-top grayscale"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="bg-ink flex-1 p-10">
            <h3 className="text-paper font-display text-2xl font-semibold">
              Scrum &amp; agile methodology
            </h3>
            <p className="text-paper/70 mb-8 mt-3 text-lg leading-relaxed">
              With our streamlined process, clients can expect:
            </p>

            <div className="mb-8 space-y-4">
              <CheckItem>Efficient project management</CheckItem>
              <CheckItem>Accelerated timelines</CheckItem>
              <CheckItem>Results that consistently exceed expectations</CheckItem>
            </div>

            <Link
              href="/contacts"
              className="block w-full bg-primary px-8 py-4 text-center text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
