'use client';

import { Button } from '@astryxdesign/core/Button';
import { useTranslations } from 'next-intl';

const catalog = [
  { tag: 'hire_tag', title: 'hire_title', description: 'hire_description', stack: ['LangGraph', 'Bedrock', 'OpenAI', 'Evals'] },
  { tag: 'product_tag', title: 'product_title', description: 'product_description', stack: ['React', 'TypeScript', 'Python', 'AWS'] },
  { tag: 'agentic_tag', title: 'agentic_title', description: 'agentic_description', stack: ['Tool calling', 'Eval loops', 'Observability', 'Handoff'] },
  { tag: 'cloud_tag', title: 'cloud_title', description: 'cloud_description', stack: ['AWS', 'Terraform', 'CI/CD', 'Security'] },
  { tag: 'data_tag', title: 'data_title', description: 'data_description', stack: ['Python', 'Postgres', 'BigQuery', 'dbt'] },
  { tag: 'ux_tag', title: 'ux_title', description: 'ux_description', stack: ['React', 'TypeScript', 'Vercel', 'Design systems'] },
  { tag: 'vision_tag', title: 'vision_title', description: 'vision_description', stack: ['YOLOv8', 'Edge', '3D scan', 'Realtime'] },
  { tag: 'ml_tag', title: 'ml_title', description: 'ml_description', stack: ['Training', 'Serving', 'Monitoring', 'Handover'] },
] as const;

export const Servicestemplate = () => {
  const t = useTranslations('ServicesCatalog');

  return (
    <section className="ht-section">
      <div className="ht-container">
        <div className="grid gap-4 md:grid-cols-2">
          {catalog.map(item => (
            <article key={item.title} className="ht-panel flex flex-col p-6 sm:p-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ht-accent)]">
                {t(item.tag)}
              </p>
              <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[var(--ht-ink)]">
                {t(item.title)}
              </h2>
              <p className="mb-6 flex-1 text-[var(--ht-muted)]">{t(item.description)}</p>
              <div className="mb-6 flex flex-wrap gap-2">
                {item.stack.map(tech => (
                  <span
                    key={tech}
                    className="border border-[var(--ht-line)] px-2.5 py-1 text-xs text-[var(--ht-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button label="Talk to us" variant="secondary" href="/contacts" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
