import { Badge } from '@astryxdesign/core/Badge';
import { Button } from '@astryxdesign/core/Button';
import { Heading } from '@astryxdesign/core/Heading';
import { Icon } from '@astryxdesign/core/Icon';
import { Text } from '@astryxdesign/core/Text';

import { pricing } from './farbleData';
import { FarbleReveal } from './FarbleReveal';

export function FarblePricing() {
  return (
    <section id="pricing" className="border-t border-[color:var(--color-border)] bg-[color:var(--color-background-muted)]">
      <div className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:py-28">
        <FarbleReveal>
          <div className="max-w-[48ch]">
            <Heading level={2} type="display-3" className="font-[family-name:var(--font-geist)] font-semibold tracking-tight text-[color:var(--color-text-primary)]">
              {pricing.heading}
            </Heading>
            <Text type="large" color="secondary" className="mt-4 block leading-relaxed">
              {pricing.sub}
            </Text>
          </div>
        </FarbleReveal>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {pricing.plans.map((plan, i) => (
            <FarbleReveal key={plan.name} delay={i * 0.08} className="h-full">
              <div
                className={`rounded-container flex h-full flex-col p-7 ${
                  plan.featured
                    ? 'border border-[color:var(--color-accent)] bg-[color:var(--color-background-card)] shadow-[0_0_0_1px_var(--color-accent),0_20px_60px_rgba(0,0,0,0.4)]'
                    : 'border border-[color:var(--color-border)] bg-[color:var(--color-background-card)]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <Text type="body" color="inherit" className="font-[family-name:var(--font-geist)] text-lg font-semibold text-[color:var(--color-text-primary)]">
                    {plan.name}
                  </Text>
                  {plan.featured && <Badge variant="success" label="Most popular" />}
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <Text type="body" color="inherit" className="font-[family-name:var(--font-geist)] text-4xl font-semibold tracking-tight text-[color:var(--color-text-primary)]">
                    {plan.price}
                  </Text>
                  <Text type="body" color="secondary" className="text-sm">
                    {plan.cadence}
                  </Text>
                </div>
                <Text type="body" color="secondary" className="mt-1 block text-sm">
                  {plan.forWho}
                </Text>

                <div className="mt-6">
                  <Button
                    label={plan.cta}
                    variant={plan.featured ? 'primary' : 'secondary'}
                    size="md"
                    className="rounded-element w-full"
                  />
                </div>

                <ul className="mt-7 space-y-3 border-t border-[color:var(--color-border)] pt-6">
                  {plan.includes.map(item => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 shrink-0 text-[color:var(--color-accent)]">
                        <Icon icon="check" color="inherit" size="xsm" />
                      </span>
                      <Text type="body" color="secondary" className="text-sm leading-snug">
                        {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            </FarbleReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
