'use client';

import { Button } from '@astryxdesign/core/Button';

export const WhatWeProvide = () => {
  return (
    <section className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-elevated)]">
      <div className="ht-container grid gap-10 lg:grid-cols-2">
        <div>
          <p className="ht-eyebrow mb-3">Bench shape</p>
          <h2 className="ht-title mb-4">
            The AI engineering capacity buyers usually need
          </h2>
          <p className="ht-lede">
            We match the role to delivery risk: agentic systems, AI product UX,
            data platforms, cloud architecture, or full-stack product ownership.
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              title: 'Agentic systems · Staff / senior',
              body: 'Tool-calling workflows, eval loops, observability, and human handoff — not demo-only wrappers.',
            },
            {
              title: 'Data platforms · Senior',
              body: 'Make AI useful against production data: permissions, semantic layers, retrieval, pipelines, reporting.',
            },
            {
              title: 'AI product UX · Full-stack',
              body: 'Streaming interfaces, review flows, dashboards, and internal tools operators trust daily.',
            },
          ].map(item => (
            <div key={item.title} className="ht-panel p-5">
              <h3 className="mb-2 font-semibold text-[var(--ht-ink)]">{item.title}</h3>
              <p className="text-sm text-[var(--ht-muted)]">{item.body}</p>
            </div>
          ))}
          <Button label="Request AI engineers" variant="primary" href="/contacts" />
        </div>
      </div>
    </section>
  );
};
