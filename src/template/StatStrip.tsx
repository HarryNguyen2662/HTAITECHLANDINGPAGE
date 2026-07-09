'use client';

import { Text } from '@astryxdesign/core/Text';
import { animate, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/* Every figure here is a published claim from a shipped system; see the
   Projects page for the source case study of each. */
const stats = [
  { value: 92, decimals: 0, suffix: '%', label: 'Helmet detection accuracy' },
  { value: 96.7, decimals: 1, suffix: '%', label: 'Traffic violations caught' },
  { value: 0.15, decimals: 2, suffix: 's', label: 'From violation to flag' },
  { value: 1, decimals: 0, suffix: 'M+', label: 'App downloads' },
];

function CountUp({
  value,
  decimals,
  suffix,
}: {
  value: number;
  decimals: number;
  suffix: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !started) {
      return;
    }
    if (reduce) {
      el.textContent = value.toFixed(decimals);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = v.toFixed(decimals);
      },
    });
    return () => controls.stop();
  }, [started, reduce, value, decimals]);

  return (
    <>
      <span ref={ref}>{reduce ? value.toFixed(decimals) : '0'}</span>
      {suffix}
    </>
  );
}

export const StatStrip = () => {
  const reduce = useReducedMotion();

  return (
    <div className="border-y border-line">
      <div className="mx-auto grid max-w-screen-lg grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="px-6 py-8 lg:px-8"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Text type="body" color="inherit" className="block font-mono text-3xl font-medium tabular-nums text-foreground sm:text-4xl">
              <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
            </Text>
            <Text type="body" size="sm" color="secondary" className="mt-2 block">
              {stat.label}
            </Text>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
