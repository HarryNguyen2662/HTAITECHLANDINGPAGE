'use client';

import { Text } from '@astryxdesign/core/Text';
import { motion, useReducedMotion } from 'framer-motion';

/* Visual for the "whole problem fits" cell: a long context bar that fills
   on scroll, with a 2M marker. Communicates scale at a glance. */
const sources = ['monorepo', 'data room', '6mo of tickets', 'API specs'];

export function ContextBar() {
  const reduce = useReducedMotion();

  return (
    <div className="mt-6">
      <div className="mb-2 flex items-baseline justify-between">
        <Text type="code" color="secondary" className="text-[11px] uppercase tracking-wider">
          Context window
        </Text>
        <Text type="code" color="inherit" className="text-[11px] tabular-nums text-[color:var(--color-accent)]">
          2M tokens
        </Text>
      </div>
      <div className="relative h-2.5 overflow-hidden rounded-full bg-[color:var(--color-background-muted)]">
        <motion.div
          className="from-[color:var(--color-accent)]/40 h-full rounded-full bg-gradient-to-r to-[color:var(--color-accent)]"
          initial={reduce ? false : { width: '4%' }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {sources.map(s => (
          <span
            key={s}
            className="rounded-inner border border-[color:var(--color-border)] bg-[color:var(--color-background-surface)] px-2.5 py-1 font-[family-name:var(--font-geist-mono)] text-[11px] text-[color:var(--color-text-secondary)]"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
