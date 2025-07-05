'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120 },
    },
    hover: {
      y: -5,
      boxShadow:
				'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  };

  const coreValues = [
    {
      title: 'Collective Success',
      icon: '🌟',
      description:
				'Where collaborative synergy meets measurable outcomes - your growth is our ultimate success metric',
    },
    {
      title: 'Ownership Excellence',
      icon: '🏆',
      description:
				'Covenant-based commitments backed by our reputation capital',
    },
    {
      title: 'Knowledge Alchemy',
      icon: '📚',
      description:
				'Transforming intellectual capital into strategic advantage through our R&D forge',
    },
    {
      title: 'Precision Craftsmanship',
      icon: '🎨',
      description:
				'Architecting digital masterpieces where binary precision meets aesthetic vision',
    },
    {
      title: 'Visionary Leap',
      icon: '🚀',
      description:
				'Orchestrating market-defining innovations that propel industry leadership',
    },
  ];

  const teamMembers = [
    {
      name: 'Dr. Nguyen Huu Tai',
      role: 'Founder | CEO | Head of AI & IoT',
      bio: 'Founder and CEO, leading AI and IoT innovation. Expert in intelligent systems, computer vision, and smart city solutions, with extensive experience in AI-driven automation and digital transformation.',
      links: ['LinkedIn'],
      href: 'https://www.linkedin.com/in/tai-nguyen-huu-69979570/',
      image: '/assets/images/chutai.png',
    },
    {
      name: 'Dr. Le Quang Chien',
      role: 'Founder, AI Team Lead, AI & IoT Expert',
      bio: 'Founder and leader of the AI Team, specializing in AI and IoT. Contributor to enterprise automation and innovative technology solutions in Vietnam.',
      links: [],
      image: '/assets/images/chuchien.png',
    },
    {
      name: 'Dr. Le Quang Minh',
      role: 'Founder & Marketing Director (Japan Market)',
      bio: 'Founder and Marketing Director for the Japan market at iResonance, leading AI-powered business evolution. Multilingual (Vietnamese, English, Japanese) with a passion for AI, education, natural agriculture, and dancing. Experienced in software development, project management, and business analysis, with a background in electronic and telecommunication engineering.',
      links: ['LinkedIn'],
      href: 'https://www.linkedin.com/in/quang-minh%EF%BC%88%E3%83%9F%E3%83%B3%EF%BC%89-a9395027/',
      image: '/assets/images/chuminh.png',
    },
    {
      name: 'Nguyen Viet Tam, MBA',
      role: 'Director of Sales & Commercial Operations, Vietnam',
      bio: 'Over 15 years of experience in accounting, taxation, and business law. Senior compliance and finance specialist at major corporations such as Đèo Cả Group, Sun Group, and others.',
      links: [],
      image: '/assets/images/chutam.png',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-20"
        >
          {/* Mission Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-5xl font-bold text-transparent">
              Redefining Digital Excellence
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              At the vanguard of technological innovation, H&T AI TECH
              engineers future-ready solutions that transcend conventional
              boundaries. We architect digital ecosystems where artificial
              intelligence converges with human ingenuity to catalyze
              unprecedented growth.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="space-y-12">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Pillars of Excellence
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {coreValues.map(value => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover="hover"
                  className="rounded-2xl border border-white/20 bg-white p-6 text-center shadow-xl backdrop-blur-lg"
                >
                  <div className="mb-4 text-4xl">{value.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <h2 className="text-center text-3xl font-bold text-gray-900">
              Visionary Leadership
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map(member => (
                <motion.div
                  key={member.name}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group relative rounded-2xl border border-white/20 bg-white p-8 shadow-xl backdrop-blur-lg"
                >
                  {/* Profile Image Container */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="relative size-32 overflow-hidden rounded-full border-4 border-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl"
                    >
                      <Image
                        src={member.image} // Add image URL to your teamMembers data
                        alt={member.name}
                        width={128}
                        height={128}
                        className="size-full object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                      />
                      <div className="absolute inset-0 rounded-full border-2 border-white/30" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="mt-20 border-b border-gray-100 pb-6">
                    <h3 className="text-center text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-center text-sm font-medium text-gray-500">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        {member.role}
                      </span>
                    </p>
                  </div>

                  <p className="mb-6 text-gray-600">{member.bio}</p>

                  <div className="flex justify-center space-x-3">
                    {member.links.map(link => (
                      <motion.a
                        key={link}
                        href={member.href}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700 transition-all hover:bg-gray-200"
                      >
                        {link === 'LinkedIn' && (
                          <svg
                            className="mr-2 size-4" /* Add LinkedIn icon SVG */
                          />
                        )}
                        {link}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-white/20 bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-center shadow-2xl backdrop-blur-lg"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">
              Pioneer the Future with Us
            </h2>
            <p className="mb-8 text-lg text-purple-100">
              Forge your legacy in the digital revolution. Collaborate with
              visionaries reshaping global technology landscapes.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-white/90 px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              Explore Executive Opportunities
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
