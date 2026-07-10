'use client';

import { Button } from '@astryxdesign/core/Button';
import Image from 'next/image';

const pillars = [
  {
    title: 'Accountable delivery',
    description: 'We take responsibility for architecture, AI quality, and release outcomes — not just hours billed.',
  },
  {
    title: 'Measure before you scale',
    description: 'Accuracy, latency, and acceptance criteria are agreed early so progress stays visible.',
  },
  {
    title: 'Work inside your process',
    description: 'Our engineers join your tools and rituals with clear ownership from H&T AI TECH.',
  },
  {
    title: 'Grow with evidence',
    description: 'We expand scope or headcount when results justify it, not by default.',
  },
];

const teamMembers = [
  {
    name: 'Dr. Nguyen Huu Tai',
    role: 'Founder · CEO · Head of AI & IoT',
    bio: 'Leads AI and IoT innovation across intelligent systems, computer vision, and smart-city automation.',
    href: 'https://www.linkedin.com/in/tai-nguyen-huu-69979570/',
    image: '/assets/images/chutai.png',
  },
  {
    name: 'Dr. Le Quang Chien',
    role: 'Founder · AI Team Lead',
    bio: 'Leads the AI team on enterprise automation and applied AI systems in Vietnam.',
    image: '/assets/images/chuchien.png',
  },
  {
    name: 'Dr. Le Quang Minh',
    role: 'Founder · Marketing Director (Japan)',
    bio: 'Leads Japan-market growth for AI-powered business initiatives. Speaks Vietnamese, English, and Japanese.',
    href: 'https://www.linkedin.com/in/quang-minh%EF%BC%88%E3%83%9F%E3%83%B3%EF%BC%89-a9395027/',
    image: '/assets/images/chuminh.png',
  },
  {
    name: 'Nguyen Viet Tam, MBA',
    role: 'Director of Sales & Commercial Operations',
    bio: '15+ years in accounting, taxation, and business law across major Vietnamese enterprises.',
    image: '/assets/images/chutam.png',
  },
];

export const AboutUs = () => {
  return (
    <div>
      <section className="border-b border-[var(--ht-line)]">
        <div className="ht-container py-20 sm:py-28">
          <div className="ht-fade-up max-w-3xl">
            <p className="ht-eyebrow mb-4">About</p>
            <h1 className="ht-display mb-6">An AI company built for real-world systems</h1>
            <p className="ht-lede">
              H&T AI TECH is a Da Nang–based team that designs computer vision,
              machine learning, and custom software for enterprises and public programs.
              We care about systems that stay useful after launch.
            </p>
          </div>
        </div>
      </section>

      <section className="ht-section">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">Principles</p>
          <h2 className="ht-title mb-10">How we work with clients</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {pillars.map(pillar => (
              <article key={pillar.title} className="ht-panel p-6">
                <h3 className="mb-3 text-xl font-semibold text-[var(--ht-ink)]">{pillar.title}</h3>
                <p className="text-[var(--ht-muted)]">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ht-section border-y border-[var(--ht-line)] bg-[var(--ht-bg-soft)]">
        <div className="ht-container">
          <p className="ht-eyebrow mb-3">Leadership</p>
          <h2 className="ht-title mb-10">Team</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map(member => (
              <article key={member.name} className="flex gap-5">
                <div className="relative size-24 shrink-0 overflow-hidden bg-[var(--ht-bg-elevated)] sm:size-28">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--ht-ink)]">{member.name}</h3>
                  <p className="mb-2 text-sm text-[var(--ht-accent)]">{member.role}</p>
                  <p className="text-sm text-[var(--ht-muted)]">{member.bio}</p>
                  {member.href && (
                    <a
                      href={member.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-[var(--ht-ink)] no-underline hover:text-[var(--ht-accent)]"
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
          <h2 className="ht-title mb-4">Partner with H&T</h2>
          <p className="ht-lede mb-8">
            Tell us about your product, operations challenge, or hiring need.
            We will suggest a practical next step.
          </p>
          <Button label="Get in touch" variant="primary" href="/contacts" />
        </div>
      </section>
    </div>
  );
};
