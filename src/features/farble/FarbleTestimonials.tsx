import { Text } from '@astryxdesign/core/Text';

import { testimonials } from './farbleData';
import { FarbleReveal } from './FarbleReveal';

export function FarbleTestimonials() {
  return (
    <section className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <FarbleReveal key={t.name} delay={i * 0.08} className="h-full">
            <figure className="rounded-container flex h-full flex-col justify-between border border-[color:var(--color-border)] bg-[color:var(--color-background-card)] p-6 sm:p-7">
              <blockquote>
                <Text type="large" color="inherit" className="block leading-relaxed text-[color:var(--color-text-primary)]">
                  “
                  {t.quote}
                  ”
                </Text>
              </blockquote>
              <figcaption className="mt-6 border-t border-[color:var(--color-border)] pt-4">
                <Text type="body" color="inherit" className="block text-sm font-medium text-[color:var(--color-text-primary)]">
                  {t.name}
                </Text>
                <Text type="body" color="secondary" className="block text-sm">
                  {t.role}
                </Text>
              </figcaption>
            </figure>
          </FarbleReveal>
        ))}
      </div>
    </section>
  );
}
