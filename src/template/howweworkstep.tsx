'use client';

import { Button } from '@astryxdesign/core/Button';

const steps = [
  {
    number: '01',
    title: 'Understand the problem',
    timing: 'Days 1–2',
    body: 'We align on goals, users, data sources, constraints, and what success should look like for the first release.',
  },
  {
    number: '02',
    title: 'Assemble the right people',
    timing: 'Days 3–5',
    body: 'You meet specialists matched to the work — AI, backend, cloud, or product engineering — before kickoff.',
  },
  {
    number: '03',
    title: 'Deliver the first useful increment',
    timing: 'Week 1–2',
    body: 'Access, architecture review, delivery rhythm, and an early working slice that proves direction.',
  },
  {
    number: '04',
    title: 'Grow only when it helps',
    timing: 'Week 3+',
    body: 'We add people or scope when results justify it — not because a plan says the team must get larger.',
  },
];

const faqs = [
  {
    q: 'Do you only provide temporary staff?',
    a: 'No. We can extend your team, but we prefer engagements where H&T owns architecture, AI integration, and delivery quality together with you.',
  },
  {
    q: 'How quickly can a project start?',
    a: 'Intro conversations can happen within a few days. Start dates depend on role fit, security onboarding, and specialist availability.',
  },
  {
    q: 'Will your engineers join our tools and meetings?',
    a: 'Yes. We work in your repositories, standups, and review process with clear ownership from H&T AI TECH.',
  },
  {
    q: 'What if we need a fixed-scope product instead of a team?',
    a: 'We can run a scoped product build, a discovery workshop, or advise if the idea is not ready yet.',
  },
];

export default function Howweworkstep() {
  return (
    <>
      <section className="ht-section">
        <div className="ht-container space-y-6">
          {steps.map(step => (
            <article key={step.number} className="ht-panel grid gap-4 p-6 sm:grid-cols-[5rem_1fr_auto] sm:items-start sm:p-8">
              <p className="text-3xl font-semibold text-[var(--ht-accent)]">{step.number}</p>
              <div>
                <h2 className="mb-2 text-2xl font-semibold text-[var(--ht-ink)]">{step.title}</h2>
                <p className="text-[var(--ht-muted)]">{step.body}</p>
              </div>
              <p className="text-sm uppercase tracking-[0.14em] text-[var(--ht-faint)]">{step.timing}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-soft)]">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">Why teams choose H&T</p>
          <h2 className="ht-title mb-8">What you can expect when we work together</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Specialists who ship',
                body: 'AI, vision, and full-stack engineers with experience taking systems from prototype to live use.',
              },
              {
                title: 'Clear communication',
                body: 'Direct access to senior leads, written plans, and progress you can review every sprint.',
              },
              {
                title: 'Vietnam-based delivery',
                body: 'A Da Nang team with strong English, competitive rates, and overlap for regional and global clients.',
              },
            ].map(item => (
              <article key={item.title} className="ht-panel p-6">
                <h3 className="mb-2 text-lg font-semibold text-[var(--ht-ink)]">{item.title}</h3>
                <p className="text-sm text-[var(--ht-muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ht-section">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">FAQ</p>
          <h2 className="ht-title mb-8">Questions clients ask before starting</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={faq.q} className="ht-panel group p-5 open:border-[var(--ht-line-strong)]">
                <summary className="cursor-pointer list-none font-semibold text-[var(--ht-ink)]">
                  <span className="mr-3 text-[var(--ht-faint)]">
                    0
                    {index + 1}
                  </span>
                  {faq.q}
                </summary>
                <p className="mt-3 text-[var(--ht-muted)]">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10">
            <Button label="Start a conversation" variant="primary" size="lg" href="/contacts" />
          </div>
        </div>
      </section>
    </>
  );
}
