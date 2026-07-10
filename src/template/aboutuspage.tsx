'use client';

import { Button } from '@astryxdesign/core/Button';
import { Text } from '@astryxdesign/core/Text';
import Image from 'next/image';

const pillars = [
  {
    title: 'Collective success',
    description:
      'Collaborative delivery with measurable outcomes — your growth is the success metric.',
  },
  {
    title: 'Ownership excellence',
    description:
      'Clear commitments and accountable delivery backed by our reputation.',
  },
  {
    title: 'Knowledge alchemy',
    description:
      'Turning research and engineering experience into strategic advantage for your product.',
  },
  {
    title: 'Precision craftsmanship',
    description:
      'Software where technical rigor meets careful product and interface design.',
  },
  {
    title: 'Visionary leap',
    description:
      'Market-defining AI and software initiatives that move industries forward.',
  },
];

const teamMembers = [
  {
    name: 'Dr. Nguyen Huu Tai',
    role: 'Founder | CEO | Head of AI & IoT',
    bio: 'Founder and CEO, leading AI and IoT innovation. Expert in intelligent systems, computer vision, and smart city solutions, with extensive experience in AI-driven automation and digital transformation.',
    href: 'https://www.linkedin.com/in/tai-nguyen-huu-69979570/',
    image: '/assets/images/chutai.png',
  },
  {
    name: 'Dr. Le Quang Chien',
    role: 'Founder, AI Team Lead, AI & IoT Expert',
    bio: 'Founder and leader of the AI Team, specializing in AI and IoT. Contributor to enterprise automation and innovative technology solutions in Vietnam.',
    image: '/assets/images/chuchien.png',
  },
  {
    name: 'Dr. Le Quang Minh',
    role: 'Founder & Marketing Director (Japan Market)',
    bio: 'Founder and Marketing Director for the Japan market, leading AI-powered business evolution. Multilingual (Vietnamese, English, Japanese) with experience across software, project management, and business analysis.',
    href: 'https://www.linkedin.com/in/quang-minh%EF%BC%88%E3%83%9F%E3%83%B3%EF%BC%89-a9395027/',
    image: '/assets/images/chuminh.png',
  },
  {
    name: 'Nguyen Viet Tam, MBA',
    role: 'Director of Sales & Commercial Operations, Vietnam',
    bio: 'Over 15 years of experience in accounting, taxation, and business law. Senior compliance and finance specialist at major corporations such as Đèo Cả Group, Sun Group, and others.',
    image: '/assets/images/chutam.png',
  },
];

export const AboutUs = () => {
  return (
    <div>
      <section className="border-b border-[var(--ht-line)]">
        <div className="ht-container py-20 sm:py-28">
          <div className="ht-fade-up max-w-3xl">
            <p className="ht-eyebrow mb-4">About us</p>
            <h1 className="ht-display mb-6">Redefining digital excellence</h1>
            <Text type="large" color="secondary" as="p">
              At the vanguard of technological innovation, H&T AI TECH engineers
              future-ready solutions where artificial intelligence converges with
              human ingenuity to catalyze growth.
            </Text>
          </div>
        </div>
      </section>

      <section className="ht-section">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">Pillars of excellence</p>
          <h2 className="ht-title mb-10">What we optimize for</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map(pillar => (
              <article key={pillar.title} className="border-t border-[var(--ht-line)] pt-5">
                <h3
                  className="mb-3 text-xl font-semibold text-[var(--ht-ink)]"
                  style={{ fontFamily: 'Georgia, \'Times New Roman\', serif' }}
                >
                  {pillar.title}
                </h3>
                <Text type="body" color="secondary" as="p">
                  {pillar.description}
                </Text>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="ht-section border-y border-[var(--ht-line)]"
        style={{ backgroundColor: 'rgba(239, 234, 227, 0.5)' }}
      >
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">Leadership</p>
          <h2 className="ht-title mb-10">Visionary leadership</h2>
          <div className="grid gap-10 md:grid-cols-2">
            {teamMembers.map(member => (
              <article key={member.name} className="flex gap-5">
                <div className="relative size-24 shrink-0 overflow-hidden bg-[var(--ht-surface-2)] sm:size-28">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ht-ink)]">{member.name}</h3>
                  <p className="mb-2 text-sm text-[var(--ht-accent)]">{member.role}</p>
                  <Text type="supporting" color="secondary" as="p">
                    {member.bio}
                  </Text>
                  {member.href && (
                    <a
                      href={member.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-[var(--ht-ink)] no-underline hover:underline"
                    >
                      LinkedIn →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ht-section">
        <div className="ht-container max-w-3xl">
          <h2 className="ht-title mb-4">Pioneer the future with us</h2>
          <Text type="large" color="secondary" as="p">
            Forge your legacy in the digital revolution. Collaborate with
            visionaries reshaping technology landscapes.
          </Text>
          <div className="mt-8">
            <Button label="Explore opportunities" variant="primary" href="/contacts" />
          </div>
        </div>
      </section>
    </div>
  );
};
