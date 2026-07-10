'use client';

import { Button } from '@astryxdesign/core/Button';
import { Text } from '@astryxdesign/core/Text';

const offerings = [
  {
    number: '01',
    title: 'Staff augmentation',
    description:
      'Need specialized talent without permanent hires? We place developers, designers, and QA specialists into your team so you can meet deadlines and keep ownership of the work.',
    benefits: [
      'Access to a specialized talent pool',
      'Quick onboarding',
      'Flexible engagement models',
      'Lower hiring overhead',
    ],
  },
  {
    number: '02',
    title: 'Dedicated development teams',
    description:
      'For a more hands-on build, we assemble a specialized team that owns the initiative end to end — with dedicated project management and cross-functional expertise.',
    benefits: [
      'End-to-end project ownership',
      'Dedicated project management',
      'Cross-functional expertise',
      'Agile development process',
    ],
  },
  {
    number: '03',
    title: 'Custom software solutions',
    description:
      'Partner with H&T AI TECH so you can focus on the business while we manage concept through launch. Dedicated resources stay on your project until goals are met.',
    benefits: [
      'Tailored solution architecture',
      'Scalable technology stack',
      'Continuous integration and delivery',
      'Post-launch support',
    ],
  },
  {
    number: '04',
    title: 'AI innovation & solutions',
    description:
      'Production AI for real operating constraints — computer vision, ML, automation, and analytics with integration, evals, and handover your team can run.',
    benefits: [
      'Cutting-edge AI integration',
      'Process automation',
      'Predictive analytics',
      'Operational metrics after launch',
    ],
  },
];

export default function Howweworkstep() {
  return (
    <section className="ht-section">
      <div className="ht-container space-y-20">
        {offerings.map((item, index) => (
          <article
            key={item.number}
            className={`grid items-start gap-10 lg:grid-cols-2 ${
              index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
            }`}
          >
            <div
              className="border border-[var(--ht-line)] p-8 sm:p-10"
              style={{ backgroundColor: 'rgba(239, 234, 227, 0.7)' }}
            >
              <p
                className="mb-6 text-5xl font-semibold"
                style={{
                  fontFamily: 'Georgia, \'Times New Roman\', serif',
                  color: 'rgba(47, 93, 80, 0.3)',
                }}
              >
                {item.number}
              </p>
              <p className="text-sm text-[var(--ht-muted)]">
                Quality assured · Best practices · Scalable delivery
              </p>
            </div>

            <div>
              <h2 className="ht-title mb-4 text-3xl sm:text-4xl">{item.title}</h2>
              <Text type="body" color="secondary" as="p">
                {item.description}
              </Text>
              <div className="mt-6">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ht-ink)]">
                  Key benefits
                </p>
                <ul className="space-y-2">
                  {item.benefits.map(benefit => (
                    <li key={benefit} className="flex gap-2 text-[var(--ht-muted)]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--ht-accent)]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button label="Contact us" variant="primary" href="/contacts" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
