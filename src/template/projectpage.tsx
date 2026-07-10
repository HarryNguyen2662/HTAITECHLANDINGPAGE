'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Button } from '@astryxdesign/core/Button';
import React, { memo } from 'react';

import { ContainerEvaluation } from './ContainerEvaluation';
import { HelmetDetection } from './HelmetDetection';
import ProjectHero from './HEROproject';
import { TictactoeProject } from './tictactoeproject';
import { TrafficMonitoring } from './TrafficMonitoring';
import { TrafficSimulationProject } from './TrafficSimulationProject';

export const ProjectsShowcase = memo(() => {
  return (
    <div>
      <ProjectHero />

      <section id="projects" className="ht-section">
        <div className="ht-container space-y-16">
          <div>
            <p className="ht-eyebrow mb-3">Case studies</p>
            <h2 className="ht-title mb-4">Systems already in production</h2>
            <p className="ht-lede">
              Computer vision and enforcement systems trained for real operating
              conditions — with evals, metrics, and field constraints.
            </p>
          </div>

          <div className="space-y-16 [&_*]:!text-[inherit]">
            <div className="ht-panel overflow-hidden p-4 sm:p-6 [&_h2]:text-[var(--ht-ink)] [&_h3]:text-[var(--ht-ink)] [&_p]:text-[var(--ht-muted)] [&_span]:text-[var(--ht-muted)]">
              <HelmetDetection />
            </div>
            <div className="ht-panel overflow-hidden p-4 sm:p-6 [&_h2]:text-[var(--ht-ink)] [&_h3]:text-[var(--ht-ink)] [&_p]:text-[var(--ht-muted)] [&_span]:text-[var(--ht-muted)]">
              <ContainerEvaluation />
            </div>
            <div className="ht-panel overflow-hidden p-4 sm:p-6 [&_h2]:text-[var(--ht-ink)] [&_h3]:text-[var(--ht-ink)] [&_p]:text-[var(--ht-muted)] [&_span]:text-[var(--ht-muted)]">
              <TrafficMonitoring />
            </div>
            <div className="ht-panel overflow-hidden p-4 sm:p-6 [&_h2]:text-[var(--ht-ink)] [&_h3]:text-[var(--ht-ink)] [&_p]:text-[var(--ht-muted)] [&_span]:text-[var(--ht-muted)]">
              <TictactoeProject />
            </div>
            <div className="ht-panel overflow-hidden p-4 sm:p-6 [&_h2]:text-[var(--ht-ink)] [&_h3]:text-[var(--ht-ink)] [&_p]:text-[var(--ht-muted)] [&_span]:text-[var(--ht-muted)]">
              <TrafficSimulationProject />
            </div>
          </div>

          <div className="ht-panel bg-[var(--ht-bg-soft)] px-8 py-12 sm:px-12">
            <h2 className="ht-title mb-4">Innovate with our AI solutions</h2>
            <p className="mb-8 max-w-2xl text-[var(--ht-muted)]">
              Explore collaboration for smart-city, operations, or educational AI projects.
            </p>
            <Button label="Request project demo" variant="primary" size="lg" href="/contacts" />
          </div>
        </div>
      </section>
    </div>
  );
});

ProjectsShowcase.displayName = 'ProjectsShowcase';

export default ProjectsShowcase;
