'use client';

import { Avatar } from '@astryxdesign/core/Avatar';
import { Heading } from '@astryxdesign/core/Heading';
import { Icon } from '@astryxdesign/core/Icon';
import { Link } from '@astryxdesign/core/Link';
import { Text } from '@astryxdesign/core/Text';
import { motion, type Variants } from 'framer-motion';
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
            <Text type="label" color="secondary" className="font-mono text-xs uppercase tracking-[0.2em]">
              About H&T AI TECH
            </Text>
            <Heading level={1} className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              The people behind the systems
            </Heading>
            <Text type="large" color="secondary" className="mt-6 block text-xl leading-relaxed">
              H&T AI TECH is a small team of Vietnamese engineers and
              operators who've shipped computer-vision systems for traffic
              and safety monitoring, an AI-graded driving-exam app used by
              thousands, and staff-augmentation teams for outside clients —
              all built and supported from Đà Nẵng.
            </Text>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants}>
            <Heading level={2} className="font-display text-2xl font-semibold">
              How we work
            </Heading>
            <div className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {coreValues.map(value => (
                <div key={value.title} className="border-t-2 border-line pt-5">
                  <Heading level={3} className="font-display text-lg font-semibold">
                    {value.title}
                  </Heading>
                  <Text type="supporting" color="secondary" className="mt-2 block leading-relaxed">
                    {value.description}
                  </Text>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants}>
            <Heading level={2} className="font-display text-2xl font-semibold">
              Founders &amp; leadership
            </Heading>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {teamMembers.map(member => (
                <div
                  key={member.name}
                  className="flex gap-5 border border-line p-6"
                >
                  <div className="size-16 shrink-0 rounded-full border border-line grayscale">
                    <Avatar src={member.image} name={member.name} size={64} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <Heading level={3} className="font-display text-lg font-semibold">
                          {member.name}
                        </Heading>
                        <Text type="body" size="sm" weight="medium" color="accent">
                          {member.role}
                        </Text>
                      </div>
                      {member.links.includes('LinkedIn') && member.href && (
                        <Link
                          href={member.href}
                          isExternalLink
                          label={`${member.name} on LinkedIn`}
                          color="secondary"
                          className="shrink-0 hover:text-primary"
                        >
                          <Icon icon={FaLinkedin} color="inherit" size="sm" />
                        </Link>
                      )}
                    </div>
                    <Text type="body" size="sm" color="secondary" className="mt-3 block leading-relaxed">
                      {member.bio}
                    </Text>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Closing */}
          <motion.div variants={itemVariants} className="border-t border-line pt-10">
            <Heading level={2} className="font-display text-xl font-semibold">
              Want to build this kind of work?
            </Heading>
            <Text type="body" color="secondary" className="mt-2 block max-w-xl">
              We're a small team that hires slowly and rarely. If Đà Nẵng-based
              applied AI work sounds interesting, we'd like to hear from you.
            </Text>
            <Link
              href="/contacts"
              color="accent"
              hasUnderline
              isStandalone
              className="mt-4 inline-block font-medium"
            >
              Get in touch →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
