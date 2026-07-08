'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export const AboutUs = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const coreValues = [
    {
      title: 'We show our work',
      description: 'Every claim on this site ties back to a shipped product or a published metric, not a slide.',
    },
    {
      title: 'We own outcomes',
      description: 'If a system underperforms after launch, that\'s our problem to fix, not a change order.',
    },
    {
      title: 'We publish what we learn',
      description: 'Model accuracy, failure modes, and what didn\'t work — we document it, we don\'t hide it.',
    },
    {
      title: 'We test for the field',
      description: 'A detection system that\'s 90% accurate in a demo and 60% accurate on-site is a failed system.',
    },
    {
      title: 'We build what\'s next',
      description: 'Traffic and safety AI in Vietnam is still early. We\'d rather define what "good" looks like.',
    },
  ];

  const teamMembers: {
    name: string;
    role: string;
    bio: string;
    links: string[];
    href?: string;
    image: string;
  }[] = [
    {
      name: 'Dr. Nguyen Huu Tai',
      role: 'Founder, CEO — Head of AI & IoT',
      bio: 'Leads AI and IoT innovation. Expert in intelligent systems, computer vision, and smart-city solutions, with extensive experience in AI-driven automation and digital transformation.',
      links: ['LinkedIn'],
      href: 'https://www.linkedin.com/in/tai-nguyen-huu-69979570/',
      image: '/assets/images/chutai.png',
    },
    {
      name: 'Dr. Le Quang Chien',
      role: 'Founder — AI Team Lead',
      bio: 'Leads the AI team, specializing in AI and IoT. Contributor to enterprise automation and technology solutions across Vietnam.',
      links: [],
      image: '/assets/images/chuchien.png',
    },
    {
      name: 'Dr. Le Quang Minh',
      role: 'Founder — Marketing Director, Japan Market',
      bio: 'Leads AI-powered business development for the Japan market at iResonance. Multilingual (Vietnamese, English, Japanese), with a background in electronic and telecommunication engineering.',
      links: ['LinkedIn'],
      href: 'https://www.linkedin.com/in/quang-minh%EF%BC%88%E3%83%9F%E3%83%B3%EF%BC%89-a9395027/',
      image: '/assets/images/chuminh.png',
    },
    {
      name: 'Nguyen Viet Tam, MBA',
      role: 'Director of Sales & Commercial Operations, Vietnam',
      bio: 'Over 15 years in accounting, taxation, and business law. Senior compliance and finance specialist at Đèo Cả Group, Sun Group, and others.',
      links: [],
      image: '/assets/images/chutam.png',
    },
  ];

  return (
    <div className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-24"
        >
          {/* Mission Section */}
          <motion.div variants={itemVariants} className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About H&T AI TECH
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold text-foreground sm:text-5xl">
              The people behind the systems
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              H&T AI TECH is a small team of Vietnamese engineers and
              operators who've shipped computer-vision systems for traffic
              and safety monitoring, an AI-graded driving-exam app used by
              thousands, and staff-augmentation teams for outside clients —
              all built and supported from Đà Nẵng.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              How we work
            </h2>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {coreValues.map(value => (
                <div key={value.title} className="border-t-2 border-line pt-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-2xl font-semibold text-foreground">
              Founders &amp; leadership
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {teamMembers.map(member => (
                <div
                  key={member.name}
                  className="flex gap-5 border border-line p-6"
                >
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-full border border-line grayscale">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="size-full object-cover"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {member.name}
                        </h3>
                        <p className="text-sm font-medium text-primary">
                          {member.role}
                        </p>
                      </div>
                      {member.links.includes('LinkedIn') && member.href && (
                        <Link
                          href={member.href}
                          aria-label={`${member.name} on LinkedIn`}
                          className="shrink-0 text-muted-foreground transition-colors hover:text-primary"
                        >
                          <FaLinkedin className="size-5" />
                        </Link>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Closing */}
          <motion.div variants={itemVariants} className="border-t border-line pt-10">
            <h2 className="font-display text-xl font-semibold text-foreground">
              Want to build this kind of work?
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              We're a small team that hires slowly and rarely. If Đà Nẵng-based
              applied AI work sounds interesting, we'd like to hear from you.
            </p>
            <Link
              href="/contacts"
              className="mt-4 inline-block font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            >
              Get in touch →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
