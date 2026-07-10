'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Button } from '@astryxdesign/core/Button';
import { Text } from '@astryxdesign/core/Text';
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
        <div className="ht-container space-y-20">
          <div>
            <p className="ht-eyebrow mb-3">AI · Smart city</p>
            <h2 className="ht-title mb-4">Field systems already in production</h2>
            <Text type="large" color="secondary" as="p">
              Computer vision and enforcement systems trained for real operating
              conditions — not demo-only accuracy.
            </Text>
          </div>

          <div className="space-y-16">
            <HelmetDetection />
            <ContainerEvaluation />
            <TrafficMonitoring />
          </div>

          <TictactoeProject />
          <TrafficSimulationProject />

          <div className="border border-[var(--ht-line)] bg-[var(--ht-ink)] px-8 py-12 text-white sm:px-12">
            <h2
              className="mb-4 text-3xl font-semibold tracking-tight"
              style={{ fontFamily: 'Georgia, \'Times New Roman\', serif' }}
            >
              Innovate with our AI solutions
            </h2>
            <p className="mb-8 max-w-2xl text-white/75">
              Explore collaboration opportunities for your smart city or
              educational projects.
            </p>
            <Button
              label="Request project demo"
              variant="secondary"
              size="lg"
              href="/contacts"
            />
          </div>
        </div>
      </section>
    </div>
  );
});

ProjectsShowcase.displayName = 'ProjectsShowcase';

export default ProjectsShowcase;
