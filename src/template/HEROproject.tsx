'use client';

import { Button } from '@astryxdesign/core/Button';
import { HStack } from '@astryxdesign/core/HStack';

export const ProjectHero = () => {
  return (
    <section className="border-b border-[var(--ht-line)]">
      <div className="ht-container py-20 sm:py-28">
        <div className="ht-fade-up max-w-3xl">
          <p className="ht-eyebrow mb-4">Work</p>
          <h1 className="ht-display mb-6">
            AI systems for cities, logistics, and everyday products
          </h1>
          <p className="ht-lede mb-8">
            Explore computer vision deployments, training platforms, and consumer
            apps built by H&T AI TECH — with metrics from real operating conditions.
          </p>
          <HStack gap={3} wrap="wrap">
            <Button label="View projects" variant="primary" size="lg" href="#projects" />
            <Button label="Request a demo" variant="secondary" size="lg" href="/contacts" />
          </HStack>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
