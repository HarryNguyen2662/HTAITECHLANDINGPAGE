import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';

import { ContextBar } from './ContextBar';
import { features } from './farbleData';
import { FarbleReveal } from './FarbleReveal';

const cellBase
  = 'group rounded-container border border-[color:var(--color-border)] bg-[color:var(--color-background-card)] p-6 transition-colors duration-300 hover:border-[color:var(--color-border-emphasized)] sm:p-8';

function Cell({ title, body }: { title: string; body: string }) {
  return (
    <div className={`${cellBase} h-full`}>
      <Heading level={3} className="font-[family-name:var(--font-geist)] text-xl font-semibold tracking-tight text-[color:var(--color-text-primary)]">
        {title}
      </Heading>
      <Text type="body" color="secondary" className="mt-2.5 block max-w-[42ch] leading-relaxed">
        {body}
      </Text>
    </div>
  );
}

export function FarbleFeatures() {
  const [b, c, d] = features.cells as [
    (typeof features.cells)[number],
    (typeof features.cells)[number],
    (typeof features.cells)[number],
  ];

  return (
    <section id="features" className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:py-28">
      <FarbleReveal>
        <div className="max-w-[52ch]">
          <Heading level={2} type="display-3" className="font-[family-name:var(--font-geist)] font-semibold tracking-tight text-[color:var(--color-text-primary)]">
            {features.heading}
          </Heading>
          <Text type="large" color="secondary" className="mt-4 block leading-relaxed">
            {features.sub}
          </Text>
        </div>
      </FarbleReveal>

      {/* Bento: one wide feature cell with a visual, then a 3-up row */}
      <div className="mt-12 grid gap-4">
        <FarbleReveal>
          <div className={cellBase}>
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
              <div>
                <Heading level={3} className="font-[family-name:var(--font-geist)] text-2xl font-semibold tracking-tight text-[color:var(--color-text-primary)]">
                  {features.large.title}
                </Heading>
                <Text type="body" color="secondary" className="mt-3 block max-w-[42ch] leading-relaxed">
                  {features.large.body}
                </Text>
              </div>
              <ContextBar />
            </div>
          </div>
        </FarbleReveal>

        <div className="grid gap-4 md:grid-cols-3">
          <FarbleReveal delay={0.05} className="h-full"><Cell title={b.title} body={b.body} /></FarbleReveal>
          <FarbleReveal delay={0.1} className="h-full"><Cell title={c.title} body={c.body} /></FarbleReveal>
          <FarbleReveal delay={0.15} className="h-full"><Cell title={d.title} body={d.body} /></FarbleReveal>
        </div>
      </div>
    </section>
  );
}
