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
            Production AI systems for smart cities and operations
          </h1>
          <p className="ht-lede mb-8">
            Field-deployed computer vision and enforcement systems with measurable
            accuracy, operating constraints, and handover your team can run.
          </p>
          <HStack gap={3} wrap="wrap">
            <Button label="Explore projects" variant="primary" size="lg" href="#projects" />
            <Button label="Request demo" variant="secondary" size="lg" href="/contacts" />
          </HStack>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
