'use client';

import { Button } from '@astryxdesign/core/Button';

const steps = [
  {
    number: '01',
    title: 'Shape the role',
    timing: 'Days 1–2',
    body: 'Clarify the product surface, model/data stack, operating constraints, timezone needs, and seniority bar.',
  },
  {
    number: '02',
    title: 'Match the bench',
    timing: 'Days 3–5',
    body: 'You meet engineers who fit the actual delivery risk: AI product, backend/data, cloud, or full-stack ownership.',
  },
  {
    number: '03',
    title: 'Start with context',
    timing: 'Week 1',
    body: 'Repo access, architecture reading, delivery rhythm, risk map, and the first useful pull request.',
  },
  {
    number: '04',
    title: 'Scale only if useful',
    timing: 'Week 3+',
    body: 'Add capacity when the operating loop is working — not because a staffing plan says the team must grow.',
  },
];

const compareRows = [
  { label: 'Senior rate', us: 'Mid', vendor: 'Low', contractor: 'High' },
  { label: 'AI-native bench', us: 'Default', vendor: 'Selective', contractor: 'Selective' },
  { label: 'Minimum engagement', us: '6 weeks', vendor: '3 months', contractor: '3 months' },
  { label: 'Talk to senior on day 1', us: 'Yes', vendor: 'Often no', contractor: 'Sometimes' },
  { label: 'Production AI ownership', us: 'Core fit', vendor: 'Varies', contractor: 'Varies' },
];

const faqs = [
  {
    q: 'Is H&T AI TECH a staffing vendor?',
    a: 'No. We can extend your team, but the stronger fit is when senior engineers need to own product judgment, architecture, AI integration, and delivery outcomes.',
  },
  {
    q: 'How fast can someone start?',
    a: 'For the right fit, the match conversation can happen within a few days. Real start timing depends on the role, security onboarding, and availability.',
  },
  {
    q: 'Can engineers work inside our repo and rituals?',
    a: 'Yes. The normal model is embedded delivery: your repo, your standups, your review process, and clear senior ownership from H&T AI TECH.',
  },
  {
    q: 'What if we need a scoped AI product instead?',
    a: 'Start with the AI product lane. We can recommend a scoped build, embedded team, audit, or stop if the problem is not ready.',
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

      <section className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-elevated)]">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">Compare</p>
          <h2 className="ht-title mb-8">Choose for shipped output, not the lowest hourly rate</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--ht-line)]">
                  <th className="py-3 pr-4 font-medium text-[var(--ht-faint)]"> </th>
                  <th className="py-3 pr-4 font-semibold text-[var(--ht-accent)]">H&T AI TECH</th>
                  <th className="py-3 pr-4 font-medium text-[var(--ht-muted)]">Large offshore vendor</th>
                  <th className="py-3 font-medium text-[var(--ht-muted)]">High-cost contractor</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(row => (
                  <tr key={row.label} className="border-b border-[var(--ht-line)]">
                    <td className="py-3 pr-4 text-[var(--ht-muted)]">{row.label}</td>
                    <td className="py-3 pr-4 font-medium text-[var(--ht-ink)]">{row.us}</td>
                    <td className="py-3 pr-4 text-[var(--ht-muted)]">{row.vendor}</td>
                    <td className="py-3 text-[var(--ht-muted)]">{row.contractor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ht-section">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">FAQ</p>
          <h2 className="ht-title mb-8">Common questions before extending a team</h2>
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
            <Button label="Request AI engineers" variant="primary" size="lg" href="/contacts" />
          </div>
        </div>
      </section>
    </>
  );
}
