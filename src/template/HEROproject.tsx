'use client';

import { Button } from '@astryxdesign/core/Button';
import { HStack } from '@astryxdesign/core/HStack';
import { Text } from '@astryxdesign/core/Text';

export const ProjectHero = () => {
  return (
    <section className="border-b border-[var(--ht-line)]">
      <div className="ht-container py-20 sm:py-28">
        <div className="ht-fade-up max-w-3xl">
          <p className="ht-eyebrow mb-4">Our projects</p>
          <h1 className="ht-display mb-6">
            Innovative AI solutions for smart cities
          </h1>
          <Text type="large" color="secondary" as="p">
            Exploring the intersection of artificial intelligence and urban
            development with projects that transform how we interact with our
            environment.
          </Text>
          <HStack gap={3} className="mt-8" wrap="wrap">
            <Button
              label="Explore AI projects"
              variant="primary"
              size="lg"
              href="#projects"
            />
            <Button
              label="Request demo"
              variant="secondary"
              size="lg"
              href="/contacts"
            />
          </HStack>
        </div>
      </div>
    </section>
  );
};

export default ProjectHero;
