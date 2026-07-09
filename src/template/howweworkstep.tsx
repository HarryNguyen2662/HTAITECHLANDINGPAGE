'use client';

import { Heading } from '@astryxdesign/core/Heading';
import { Icon } from '@astryxdesign/core/Icon';
import { Text } from '@astryxdesign/core/Text';
import {
  Building,
  ChevronRight,
  Code,
  Cpu,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type ServiceCardProps = {
  number: number;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  image: string;
  benefits: string[];
};

/* Consistent index-row layout: number + content left, evidence image right.
   The repetition is the design (a numbered engagement-model index), matching
   the Process timeline's documentation motif. */
const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  icon,
  image,
  benefits,
}) => {
  return (
    <div className="grid grid-cols-1 gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
      <div className="w-full">
        <div className="flex items-center gap-3">
          <Text type="label" color="inherit" as="span" className="flex size-9 shrink-0 items-center justify-center border border-ink font-mono text-sm text-ink">
            {String(number).padStart(2, '0')}
          </Text>
          <Icon icon={icon} color="accent" size="sm" />
        </div>
        <Heading level={2} className="mt-4 font-display text-2xl font-semibold">{title}</Heading>
        <Text type="body" color="secondary" className="mt-3 block leading-relaxed">{description}</Text>

        <ul className="mt-6 space-y-2">
          {benefits.map(benefit => (
            <li key={benefit} className="flex items-center gap-2">
              <Icon icon={ChevronRight} color="accent" size="sm" className="shrink-0" />
              <Text type="body">{benefit}</Text>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <div className="relative aspect-[5/3] w-full overflow-hidden border border-line">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
};

const Howweworkstep = () => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <ServiceCard
        number={1}
        title="Effortless Team Expansion"
        icon={Building}
        image="/assets/images/howweworkteam1.png"
        benefits={[
          'Access to specialized talent pool',
          'Quick onboarding process',
          'Flexible engagement models',
          'Reduced hiring overhead',
        ]}
        description="Need specialized talent to strengthen your team? Our staff augmentation services provide the right professionals (developers, designers, and QA specialists) to boost your capabilities and accelerate your projects without the commitment of permanent hires."
      />

      <ServiceCard
        number={2}
        title="Full-Service Development Teams"
        icon={Users}
        image="/assets/images/howweworkteam2.jpg"
        benefits={[
          'End-to-end project ownership',
          'Dedicated project management',
          'Cross-functional expertise',
          'Agile development process',
        ]}
        description="For a more hands-on approach, we assemble a dedicated team with the right expertise to handle your project from start to finish, with resources focused exclusively on your initiative."
      />

      <ServiceCard
        number={3}
        title="Custom Software Solutions"
        icon={Code}
        image="/assets/images/howweworkteam3.jpg"
        benefits={[
          'Tailored solutions architecture',
          'Scalable technology stack',
          'Continuous integration/delivery',
          'Post-launch support',
        ]}
        description="Partnering with H&T AI TECH for your software development needs lets you concentrate on your core business while we manage the entire process, from concept to launch, with quality and long-term maintainability in mind."
      />

      <ServiceCard
        number={4}
        title="AI Innovation & Solutions"
        icon={Cpu}
        image="/assets/images/howweworkteam5.jpg"
        benefits={[
          'Cutting-edge AI integration',
          'Low-code implementation',
          'Process automation',
          'Predictive analytics',
        ]}
        description="From computer-vision systems to low-code automation, we help you apply AI where it actually moves the needle, grounded in what your data can support rather than what's trending."
      />
    </div>
  );
};

export default Howweworkstep;
