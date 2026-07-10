'use client';

import { Collapsible, CollapsibleGroup } from '@astryxdesign/core/Collapsible';
import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';

import { faq } from './farbleData';
import { FarbleReveal } from './FarbleReveal';

export function FarbleFaq() {
  return (
    <section id="faq" className="mx-auto max-w-[820px] px-4 py-20 sm:px-6 lg:py-28">
      <FarbleReveal>
        <Heading level={2} type="display-3" className="text-center font-[family-name:var(--font-geist)] font-semibold tracking-tight text-[color:var(--color-text-primary)]">
          {faq.heading}
        </Heading>
      </FarbleReveal>

      <FarbleReveal delay={0.05}>
        <div className="mt-10 divide-y divide-[color:var(--color-border)] border-y border-[color:var(--color-border)]">
          <CollapsibleGroup type="single">
            {faq.items.map((item, i) => (
              <Collapsible
                key={item.q}
                value={`faq-${i}`}
                defaultIsOpen={false}
                trigger={(
                  <Text type="body" color="inherit" as="div" className="block w-full py-5 text-left font-[family-name:var(--font-geist)] text-[16px] font-medium text-[color:var(--color-text-primary)]">
                    {item.q}
                  </Text>
                )}
              >
                <Text type="body" color="secondary" className="block max-w-[68ch] pb-6 leading-relaxed">
                  {item.a}
                </Text>
              </Collapsible>
            ))}
          </CollapsibleGroup>
        </div>
      </FarbleReveal>
    </section>
  );
}
