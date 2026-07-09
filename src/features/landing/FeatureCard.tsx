'use client';

import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';
import { motion, useReducedMotion } from 'framer-motion';

export const FeatureCard = (props: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  index?: number;
}) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="group border-t-2 border-line pt-6 transition-colors duration-300 hover:border-primary"
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: (props.index ?? 0) * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Icons follow the site photo rule: grayscale at rest, color on focus */}
      <div className="flex size-12 items-center justify-center rounded border border-line bg-secondary p-2.5 transition-transform duration-300 group-hover:-translate-y-1 [&_img]:grayscale [&_img]:transition-[filter] [&_img]:duration-300 group-hover:[&_img]:grayscale-0 [&_svg]:size-full [&_svg]:stroke-graphite">
        {props.icon}
      </div>

      <Heading level={3} className="mt-5 font-display text-xl font-semibold">
        {props.title}
      </Heading>

      <Text type="body" color="secondary" className="mt-2 block text-base leading-relaxed">
        {props.children}
      </Text>
    </motion.div>
  );
};
