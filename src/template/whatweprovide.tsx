'use client';

import { Button } from '@astryxdesign/core/Button';

export const WhatWeProvide = () => {
  return (
    <section className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-soft)]">
      <div className="ht-container grid gap-10 lg:grid-cols-2">
        <div>
          <p className="ht-eyebrow mb-3">Team shapes</p>
          <h2 className="ht-title mb-4">
            Specialists matched to the work you need done
          </h2>
          <p className="ht-lede">
            We staff around the problem — vision systems, data platforms,
            product interfaces, or full product ownership — instead of a generic roster.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              title: 'Automation & agents',
              body: 'Workflows that call tools, request human review, and stay observable in production.',
            },
            {
              title: 'Data & backend for AI',
              body: 'Pipelines, permissions, retrieval, and reporting that keep models connected to real data.',
            },
            {
              title: 'Product interfaces',
              body: 'Dashboards, review screens, and operator tools that make AI outputs actionable.',
            },
          ].map(item => (
            <div key={item.title} className="ht-panel p-5">
              <h3 className="mb-2 font-semibold text-[var(--ht-ink)]">{item.title}</h3>
              <p className="text-sm text-[var(--ht-muted)]">{item.body}</p>
            </div>
          ))}
          <Button label="Discuss your team needs" variant="primary" href="/contacts" />
        </div>
      </div>
    </section>
  );
};
