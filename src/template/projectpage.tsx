'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Heading } from '@astryxdesign/core/Heading';
import { Link } from '@astryxdesign/core/Link';
import { Text } from '@astryxdesign/core/Text';
import { memo } from 'react';

import { ContainerEvaluation } from './ContainerEvaluation';
import { HelmetDetection } from './HelmetDetection';
import ProjectHero from './HEROproject';
import { TictactoeProject } from './tictactoeproject';
import { TrafficMonitoring } from './TrafficMonitoring';
import { TrafficSimulationProject } from './TrafficSimulationProject';

export const ProjectsShowcase = memo(() => {
  return (
    <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <ProjectHero />
      <div className="mx-auto max-w-7xl space-y-20">
        <div className="space-y-8">
          <div>
            <Text type="label" color="secondary" className="block font-mono text-xs uppercase tracking-[0.15em]">
              Case studies
            </Text>
            <Heading level={2} className="mt-2 font-display text-2xl font-semibold">
              Applied computer vision
            </Heading>
          </div>
          <div className="space-y-8">
            <HelmetDetection />
            <ContainerEvaluation />
            <TrafficMonitoring />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <Text type="label" color="secondary" className="block font-mono text-xs uppercase tracking-[0.15em]">
              Consumer apps
            </Text>
            <Heading level={2} className="mt-2 font-display text-2xl font-semibold">
              Shipped products
            </Heading>
          </div>
          <div className="space-y-8">
            <TictactoeProject />
            <TrafficSimulationProject />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-ink px-8 py-14 text-center sm:px-12">
          <Heading level={2} color="inherit" className="font-display text-2xl font-semibold text-paper sm:text-3xl">
            Have a smart-city or safety project in mind?
          </Heading>
          <Text type="large" color="inherit" className="mx-auto mt-3 block max-w-xl text-paper/70">
            Tell us what you're trying to detect, verify, or automate, and we'll
            tell you honestly whether it's a good fit for what we build.
          </Text>

          <Link
            href="/contacts"
            color="inherit"
            className="mt-6 inline-block bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Talk to the team
          </Link>
        </div>
      </div>
    </div>
  );
});

export default ProjectsShowcase;
