'use client';

import {
  ArrowRight,
  Building,
  ChevronRight,
  Code,
  Cpu,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ServiceCardProps = {
  number: number;
  title: string;
  description: string;
  isEven?: boolean;
  icon: React.ElementType;
  image: string;
  benefits: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  number,
  title,
  description,
  isEven = false,
  icon,
  image,
  benefits,
}) => {
  const imagePanel = (
    <div className="w-full lg:w-1/2">
      <div className="relative aspect-[5/3] w-full overflow-hidden border border-line">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 lg:grid-cols-2 lg:items-center">
      {!isEven && imagePanel}

      <div className="w-full">
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm font-medium tabular-nums text-muted-foreground">
            {String(number).padStart(2, '0')}
          </span>
          {React.createElement(icon, { className: 'text-primary', size: 20 })}
        </div>
        <h2 className="mt-3 font-display text-2xl font-semibold text-foreground">{title}</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>

        <ul className="mt-6 space-y-2">
          {benefits.map(benefit => (
            <li key={benefit} className="flex items-center gap-2 text-foreground">
              <ChevronRight size={16} className="shrink-0 text-primary" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {isEven && imagePanel}
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
        description="Need specialized talent to strengthen your team? Our staff augmentation services provide the right professionals — developers, designers, and QA specialists — to boost your capabilities and accelerate your projects without the commitment of permanent hires."
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
        isEven
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
        description="From computer-vision systems to low-code automation, we help you apply AI where it actually moves the needle — grounded in what your data can support, not what's trending."
        isEven
      />

      <div className="mt-4 flex justify-center border-t border-line pt-12">
        <Link
          href="/contacts"
          className="inline-flex items-center gap-2 bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Talk to the team
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default Howweworkstep;
