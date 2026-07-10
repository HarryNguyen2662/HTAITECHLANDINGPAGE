import { Button } from '@astryxdesign/core/Button';
import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';

import { finalCta } from './farbleData';
import { FarbleReveal } from './FarbleReveal';

export function FarbleCta() {
  return (
    <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-background-surface)]">
      <div className="mx-auto max-w-[820px] px-4 py-20 text-center sm:px-6 lg:py-28">
        <FarbleReveal>
          <Heading level={2} type="display-2" className="mx-auto max-w-[18ch] font-[family-name:var(--font-geist)] font-semibold tracking-tight text-[color:var(--color-text-primary)]">
            {finalCta.heading}
          </Heading>
          <Text type="large" color="secondary" className="mx-auto mt-5 block max-w-[52ch] leading-relaxed">
            {finalCta.sub}
          </Text>
          <div className="mt-9 flex justify-center">
            <Button label={finalCta.cta} variant="primary" size="lg" className="rounded-element" />
          </div>
        </FarbleReveal>
      </div>
    </section>
  );
}
