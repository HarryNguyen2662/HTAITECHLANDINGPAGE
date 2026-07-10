'use client';

import { Button } from '@astryxdesign/core/Button';
import Link from 'next/link';

const shippedProducts = [
  {
    tag: 'VISION',
    name: 'HelmetGuard',
    category: 'Workplace safety',
    description:
      'YOLOv8 helmet and head detection for construction sites — 92% accuracy, real-time video, field-ready handover.',
    status: 'Shipped',
    href: '/project#projects',
  },
  {
    tag: 'VISION',
    name: 'ContainerScan',
    category: 'Logistics inspection',
    description:
      'Computer vision and 3D AI for container damage inspection — cuts wait time, automates EIR, 2mm precision.',
    status: 'Shipped',
    href: '/project#projects',
  },
  {
    tag: 'VISION',
    name: 'TrafficEnforce',
    category: 'Smart city',
    description:
      'Real-time traffic violation detection trained on Vietnamese data — multi-camera fusion, edge-cloud hybrid.',
    status: 'Shipped',
    href: '/project#projects',
  },
  {
    tag: 'PRODUCT',
    name: 'Tic Tac Toe AI',
    category: 'Consumer · 1M+ downloads',
    description:
      'Cross-platform game with advanced AI opponents, 5-in-a-row mode, and multiplayer — live on App Store and Google Play.',
    status: 'Live',
    href: '/project#projects',
  },
];

const buildingNow = [
  {
    tag: 'IN PROGRESS',
    name: 'Traffic Simulation Platform',
    category: 'Training · Education',
    description:
      'AI-powered traffic law training with evaluation, real-time feedback, video guides, and mobile apps.',
    next: 'Expand scenario packs and AI scoring coverage',
  },
  {
    tag: 'IN PROGRESS',
    name: 'Smart City Vision Suite',
    category: 'Platform',
    description:
      'Unifying helmet, container, and traffic models into one deployable vision stack with shared evals and ops metrics.',
    next: 'Shared model registry, edge packaging, operator dashboards',
  },
  {
    tag: 'IN PROGRESS',
    name: 'Agentic Ops Copilot',
    category: 'Internal tools',
    description:
      'Multi-agent workflows for inspection review, violation triage, and human handoff — eval loops before wider release.',
    next: 'Pilot with field operators, harden guardrails',
  },
];

export const Products = () => {
  return (
    <>
      <section id="products" className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-elevated)]">
        <div className="ht-container">
          <div className="mb-12 max-w-2xl">
            <p className="ht-eyebrow mb-3">Products</p>
            <h2 className="ht-title mb-4">Products we build</h2>
            <p className="ht-lede">
              AI products and field systems H&T AI TECH ships and operates —
              inspectable before the first scoping call.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {shippedProducts.map(product => (
              <article
                key={product.name}
                className="ht-panel flex flex-col p-6 transition-colors hover:border-[var(--ht-line-strong)] sm:p-8"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-accent)]">
                    {product.tag}
                  </p>
                  <span className="border border-[var(--ht-line)] px-2 py-0.5 text-xs text-[var(--ht-muted)]">
                    {product.status}
                  </span>
                </div>
                <h3 className="mb-1 text-2xl font-semibold tracking-tight text-[var(--ht-ink)]">
                  {product.name}
                </h3>
                <p className="mb-3 text-sm text-[var(--ht-faint)]">{product.category}</p>
                <p className="mb-5 flex-1 text-[var(--ht-muted)]">{product.description}</p>
                <Link
                  href={product.href}
                  className="text-sm font-medium text-[var(--ht-ink)] no-underline hover:text-[var(--ht-accent)]"
                >
                  View details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="building-now" className="ht-section">
        <div className="ht-container">
          <div className="mb-12 max-w-2xl">
            <p className="ht-eyebrow mb-3">Building now</p>
            <h2 className="ht-title mb-4">What we are shipping next</h2>
            <p className="ht-lede">
              Active product work — clear next milestones, not vague roadmaps.
            </p>
          </div>

          <div className="space-y-4">
            {buildingNow.map((item, index) => (
              <article
                key={item.name}
                className="ht-panel grid gap-4 p-6 sm:grid-cols-[4rem_1fr] sm:items-start sm:p-8"
              >
                <p className="text-2xl font-semibold text-[var(--ht-accent)]">
                  0
                  {index + 1}
                </p>
                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold text-[var(--ht-ink)]">{item.name}</h3>
                    <span className="border-[var(--ht-accent)]/40 border px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--ht-accent)]">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mb-2 text-sm text-[var(--ht-faint)]">{item.category}</p>
                  <p className="mb-3 text-[var(--ht-muted)]">{item.description}</p>
                  <p className="text-sm text-[var(--ht-ink)]">
                    <span className="text-[var(--ht-faint)]">Next: </span>
                    {item.next}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Button label="Explore all work" variant="secondary" href="/project" />
          </div>
        </div>
      </section>
    </>
  );
};
