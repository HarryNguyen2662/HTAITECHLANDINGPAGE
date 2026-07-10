import { Button } from '@astryxdesign/core/Button';
import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';

import { hero } from './farbleData';
import { FarbleReveal } from './FarbleReveal';
import { HeroDemoPanel } from './HeroDemoPanel';

export function FarbleHero() {
  return (
    <section id="top" className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Copy stack: exactly 4 elements */}
        <div>
          <FarbleReveal>
            <Text type="code" color="inherit" className="text-xs uppercase tracking-[0.24em] text-[color:var(--color-accent)]">
              {hero.eyebrow}
            </Text>
          </FarbleReveal>

          <FarbleReveal delay={0.08}>
            <Heading level={1} type="display-2" className="mt-5 max-w-[16ch] font-[family-name:var(--font-geist)] font-semibold tracking-tight text-[color:var(--color-text-primary)]">
              {hero.title}
            </Heading>
          </FarbleReveal>

          <FarbleReveal delay={0.16}>
            <Text type="large" color="secondary" className="mt-6 block max-w-[46ch] leading-relaxed">
              {hero.subtitle}
            </Text>
          </FarbleReveal>

          <FarbleReveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button label={hero.primaryCta} variant="primary" size="lg" className="rounded-element" />
              <Button label={hero.secondaryCta} variant="secondary" size="lg" className="rounded-element" />
            </div>
          </FarbleReveal>
        </div>

        {/* Live demo */}
        <FarbleReveal delay={0.2} y={28}>
          <HeroDemoPanel />
        </FarbleReveal>
      </div>
    </section>
  );
}
