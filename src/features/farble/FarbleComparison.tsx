'use client';

import { Heading } from '@astryxdesign/core/Heading';
import { Icon } from '@astryxdesign/core/Icon';
import { Text } from '@astryxdesign/core/Text';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';
import { useState } from 'react';

import { comparison } from './farbleData';
import { FarbleReveal } from './FarbleReveal';

export function FarbleComparison() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(comparison.tabs[0]!.id);
  const tab = comparison.tabs.find(t => t.id === active)!;

  return (
    <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-background-muted)]">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:py-28">
        <FarbleReveal>
          <Heading level={2} type="display-3" className="max-w-[20ch] font-[family-name:var(--font-geist)] font-semibold tracking-tight text-[color:var(--color-text-primary)]">
            {comparison.heading}
          </Heading>
        </FarbleReveal>

        {/* Scenario tabs */}
        <FarbleReveal delay={0.05}>
          <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Demo scenarios">
            {comparison.tabs.map(t => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={t.id === active}
                onClick={() => setActive(t.id)}
                className={`rounded-full px-4 py-2 font-[family-name:var(--font-geist)] text-sm font-medium transition-colors ${
                  t.id === active
                    ? 'bg-[color:var(--color-accent)] text-[color:var(--color-on-accent)]'
                    : 'border border-[color:var(--color-border-emphasized)] text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </FarbleReveal>

        {/* Prompt */}
        <FarbleReveal delay={0.1}>
          <div className="rounded-container mt-6 border border-[color:var(--color-border)] bg-[color:var(--color-background-card)] px-5 py-4">
            <Text type="code" color="secondary" className="text-[11px] uppercase tracking-wider">
              Prompt
            </Text>
            <Text type="body" color="inherit" className="mt-1.5 block font-[family-name:var(--font-geist-mono)] text-[13px] leading-relaxed text-[color:var(--color-text-primary)]">
              {tab.prompt}
            </Text>
          </div>
        </FarbleReveal>

        {/* Side by side */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {/* Standard */}
          <div className="rounded-container border border-[color:var(--color-border)] bg-[color:var(--color-background-card)] p-6">
            <Text type="code" color="secondary" className="text-[11px] uppercase tracking-wider">
              A standard model
            </Text>
            <AnimatePresence mode="wait">
              <motion.ul
                key={tab.id}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-4 space-y-3"
              >
                {tab.standard.map(line => (
                  <li key={line} className="flex items-start gap-2.5">
                    <span className="mt-1 shrink-0 text-[color:var(--color-text-disabled)]">
                      <Icon icon={Minus} color="inherit" size="xsm" />
                    </span>
                    <Text type="body" color="secondary" className="text-[14px] leading-snug">
                      {line}
                    </Text>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          {/* Max */}
          <div className="rounded-container border border-[color:var(--color-accent-muted)] bg-[color:var(--color-background-card)] p-6 shadow-[inset_0_0_0_1px_var(--color-accent-muted)]">
            <div className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[color:var(--color-accent)]" />
              <Text type="code" color="inherit" className="text-[11px] uppercase tracking-wider text-[color:var(--color-accent)]">
                Farble 5 Max
              </Text>
            </div>
            <AnimatePresence mode="wait">
              <motion.ul
                key={tab.id}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-4 space-y-3"
              >
                {tab.max.map((line, i) => (
                  <motion.li
                    key={line}
                    initial={reduce ? false : { opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reduce ? 0 : i * 0.09 }}
                    className="flex items-start gap-2.5"
                  >
                    <span className="mt-0.5 shrink-0 text-[color:var(--color-accent)]">
                      <Icon icon={Check} color="inherit" size="xsm" />
                    </span>
                    <Text type="body" color="inherit" className="text-[14px] leading-snug text-[color:var(--color-text-primary)]">
                      {line}
                    </Text>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
