'use client';

import { Button } from '@astryxdesign/core/Button';

export const ProjectTeaser = () => {
  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="mb-10 max-w-2xl">
          <p className="ht-eyebrow mb-3">Selected work</p>
          <h2 className="ht-title mb-4">AI systems already running in the field</h2>
          <p className="ht-lede">
            Computer vision and enforcement systems trained for real operating
            conditions — with measurable accuracy, not demo-only confidence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: 'Helmet detection', metric: '92% accuracy' },
            { label: 'Container inspection', metric: '−70% time' },
            { label: 'Traffic enforcement', metric: '96.7% detection' },
          ].map(item => (
            <div key={item.label} className="ht-panel px-5 py-6">
              <p className="text-sm text-[var(--ht-faint)]">{item.label}</p>
              <p className="mt-2 text-2xl font-semibold text-[var(--ht-ink)]">{item.metric}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button label="View work" variant="secondary" size="lg" href="/project" />
        </div>
      </div>
    </section>
  );
};
