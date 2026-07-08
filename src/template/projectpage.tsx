'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import Link from 'next/link';
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
            <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Case studies
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
              Applied computer vision
            </h2>
          </div>
          <div className="space-y-8">
            <HelmetDetection />
            <ContainerEvaluation />
            <TrafficMonitoring />
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
              Consumer apps
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
              Shipped products
            </h2>
          </div>
          <div className="space-y-8">
            <TictactoeProject />
            <TrafficSimulationProject />
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-ink px-8 py-14 text-center sm:px-12">
          <h2 className="text-paper font-display text-2xl font-semibold sm:text-3xl">
            Have a smart-city or safety project in mind?
          </h2>
          <p className="text-paper/70 mx-auto mt-3 max-w-xl">
            Tell us what you're trying to detect, verify, or automate — we'll
            tell you honestly whether it's a good fit for what we build.
          </p>

          <Link
            href="/contacts"
            className="mt-6 inline-block bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Request a project demo
          </Link>
        </div>
      </div>
    </div>
  );
});

export default ProjectsShowcase;
