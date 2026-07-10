'use client';

import { Button } from '@astryxdesign/core/Button';
import Link from 'next/link';

const shippedProducts = [
  {
    tag: 'VISION',
    name: 'HelmetGuard',
    category: 'Workplace safety',
    description:
      'Detects helmets and heads on construction sites with YOLOv8 — about 92% accuracy in live video streams.',
    status: 'Live',
    href: '/project#projects',
  },
  {
    tag: 'VISION',
    name: 'ContainerScan',
    category: 'Logistics inspection',
    description:
      'Finds container damage with computer vision and 3D scanning — faster inspections and automated reports.',
    status: 'Live',
    href: '/project#projects',
  },
  {
    tag: 'VISION',
    name: 'TrafficEnforce',
    category: 'Smart city',
    description:
      'Flags traffic violations in real time using models trained on Vietnamese road data and multi-camera setups.',
    status: 'Live',
    href: '/project#projects',
  },
  {
    tag: 'APP',
    name: 'Tic Tac Toe AI',
    category: 'Consumer · 1M+ downloads',
    description:
      'A cross-platform game with strong AI opponents, 5-in-a-row mode, and multiplayer on iOS and Android.',
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
      'An AI-assisted platform for traffic-law practice with scoring, feedback, and mobile learning materials.',
    next: 'More scenario packs and richer AI scoring',
  },
  {
    tag: 'IN PROGRESS',
    name: 'Smart City Vision Suite',
    category: 'Platform',
    description:
      'Combining helmet, container, and traffic models into one deployable vision stack with shared monitoring.',
    next: 'Shared model registry and operator dashboards',
  },
  {
    tag: 'IN PROGRESS',
    name: 'Operations Copilot',
    category: 'Internal tools',
    description:
      'Agent-assisted review for inspections and violation triage, with human approval before actions go out.',
    next: 'Field pilot and stronger safety checks',
  },
];

export const Products = () => {
  return (
    <>
      <section id="products" className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-soft)]">
        <div className="ht-container">
          <div className="mb-12 max-w-2xl">
            <p className="ht-eyebrow mb-3">Products</p>
            <h2 className="ht-title mb-4">Products from H&T AI TECH</h2>
            <p className="ht-lede">
              Software and AI systems we design, ship, and support — from smart-city
              vision to consumer apps.
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
                  See details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="building-now" className="ht-section">
        <div className="ht-container">
          <div className="mb-12 max-w-2xl">
            <p className="ht-eyebrow mb-3">In progress</p>
            <h2 className="ht-title mb-4">What our product teams are building now</h2>
            <p className="ht-lede">
              Active initiatives with concrete next steps — so you can see where
              H&T is investing today.
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
            <Button label="Browse all work" variant="secondary" href="/project" />
          </div>
        </div>
      </section>
    </>
  );
};
