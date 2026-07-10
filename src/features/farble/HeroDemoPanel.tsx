'use client';

import { Icon } from '@astryxdesign/core/Icon';
import { Text } from '@astryxdesign/core/Text';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Check, RotateCcw } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

/* A scripted, replayable illustration of Max reading a whole problem before
   answering. Not a live API call: it is a product demo, and reads as one. */

const files = [
  'billing/legacy_invoicer.py',
  'billing/tax_engine.py',
  'services/queue.py',
  'tests/test_invoicer.py',
  'schema/migrations/0142.sql',
  'docs/adr/0007-billing.md',
];

const trace = [
  'Reading 41 call sites across the repo',
  'Isolating the tax engine behind an interface',
  'Writing 23 characterization tests',
  'Running the suite: 23 passed, 2 pre-existing bugs found',
];

const STEP_MS = 700;
const REST_MS = 3200;
const totalSteps = files.length + trace.length + 1;

export function HeroDemoPanel() {
  const reduce = useReducedMotion();
  // SSR and reduced-motion render the settled panel (never an empty flash).
  const [runId, setRunId] = useState(0);
  const [step, setStep] = useState(totalSteps);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => {
    if (reduce) {
      setStep(totalSteps);
      return;
    }
    clearTimers();
    // One play cycle: fill, then rest at full, then loop.
    const play = () => {
      setStep(0);
      for (let i = 1; i <= totalSteps; i++) {
        timers.current.push(setTimeout(() => setStep(i), i * STEP_MS));
      }
      timers.current.push(setTimeout(play, totalSteps * STEP_MS + REST_MS));
    };
    // Start after a beat so the settled panel is the first thing seen.
    timers.current.push(setTimeout(play, 900));
    return clearTimers;
  }, [runId, reduce, clearTimers]);

  const filesRead = Math.min(step, files.length);
  const traceShown = Math.max(0, Math.min(step - files.length, trace.length));
  const done = step >= totalSteps;
  const contextPct = Math.round((filesRead / files.length) * 100);

  return (
    <div className="rounded-page overflow-hidden border border-[color:var(--color-border-emphasized)] bg-[color:var(--color-background-card)] shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-[color:var(--color-border)] bg-[color:var(--color-background-surface)] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2.5 rounded-full bg-[color:var(--color-border-emphasized)]" />
          <span className="size-2.5 rounded-full bg-[color:var(--color-border-emphasized)]" />
          <span className="size-2.5 rounded-full bg-[color:var(--color-border-emphasized)]" />
        </div>
        <Text type="code" color="secondary" className="text-[11px]">
          farble-5-max · reasoning
        </Text>
        <button
          type="button"
          onClick={() => setRunId(id => id + 1)}
          aria-label="Replay demo"
          className="rounded-inner flex items-center gap-1.5 px-2 py-1 text-[color:var(--color-text-secondary)] transition-colors hover:bg-[color:var(--color-overlay-hover)] hover:text-[color:var(--color-text-primary)]"
        >
          <Icon icon={RotateCcw} color="inherit" size="xsm" />
          <span className="font-[family-name:var(--font-geist-mono)] text-[11px]">Replay</span>
        </button>
      </div>

      <div className="min-h-[360px] space-y-5 p-5">
        {/* Context meter */}
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <Text type="code" color="secondary" className="text-[11px] uppercase tracking-wider">
              Context loaded
            </Text>
            <Text type="code" color="inherit" className="text-[11px] tabular-nums text-[color:var(--color-accent)]">
              {contextPct}
              %
            </Text>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-[color:var(--color-background-muted)]">
            <motion.div
              className="h-full rounded-full bg-[color:var(--color-accent)]"
              animate={{ width: `${contextPct}%` }}
              transition={{ duration: reduce ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {files.slice(0, filesRead).map(file => (
              <motion.span
                key={file}
                initial={reduce ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-inner bg-[color:var(--color-background-muted)] px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-[10.5px] text-[color:var(--color-text-secondary)]"
              >
                {file}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Reasoning trace */}
        <div className="space-y-2 border-t border-[color:var(--color-border)] pt-4">
          {trace.slice(0, traceShown).map((line, i) => {
            const isLast = i === traceShown - 1;
            const settled = done || !isLast;
            return (
              <motion.div
                key={line}
                initial={reduce ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-start gap-2.5"
              >
                <span className="mt-1.5 shrink-0">
                  {settled
                    ? <Icon icon={Check} color="inherit" size="xsm" className="text-[color:var(--color-accent)]" />
                    : <span className="block size-1.5 animate-pulse rounded-full bg-[color:var(--color-accent)]" />}
                </span>
                <Text type="body" color="inherit" className="text-[13px] leading-snug text-[color:var(--color-text-primary)]">
                  {line}
                </Text>
              </motion.div>
            );
          })}
        </div>

        {/* Result */}
        <AnimatePresence>
          {done && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-element flex items-center gap-2.5 border border-[color:var(--color-accent-muted)] bg-[color:var(--color-accent-muted)] px-3.5 py-3"
            >
              <Icon icon={Check} color="inherit" size="sm" className="text-[color:var(--color-accent)]" />
              <Text type="body" color="inherit" className="text-[13px] font-medium text-[color:var(--color-text-primary)]">
                Reviewed diff opened. Behavior identical, 2 bugs reported.
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
