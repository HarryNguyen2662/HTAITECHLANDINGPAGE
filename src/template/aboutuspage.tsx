'use client';

import { motion } from 'framer-motion';
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
  };

  const hoverEffect = {
    hover: {
      y: -5,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  };

  const coreValues = [
    { title: 'Help First', icon: '🤝', description: 'We prioritize collaboration and support in every interaction' },
    { title: 'Own Your Work', icon: '💪', description: 'Taking full responsibility for our commitments and outcomes' },
    { title: 'Learn and Share', icon: '🧠', description: 'Continuous growth through knowledge exchange' },
    { title: 'Deliver Excellence', icon: '🎯', description: 'Striving for exceptional quality in every solution' },
    { title: 'Step Up', icon: '🚀', description: 'Proactively seeking opportunities to create impact' },
  ];

  const teamMembers = [
    {
      name: 'Harley Trung',
      role: 'Co-founder & CEO',
      bio: '4x founder in tech & ed. Startup advisor. EO Vietnam chapter founding member. SEALA board member. Yale Computer Science. Alum of Techstars 2010 & SOSV 2014. ASEAN Developer Hero 2016.',
      links: ['Github', 'Linkedin-in'],
    },
    {
      name: 'Long Vu',
      role: 'Co-founder & COO',
      bio: 'Seasoned entrepreneur with two decades of experience. Co-created a startup that raised $8M in 2 years. Alum of Founder Institute 2017.',
      links: ['Github', 'Linkedin-in'],
    },
    {
      name: 'Vu Hoang',
      role: 'Managing Partner, North America',
      bio: '20+ year veteran as CEO and Founder. Bootstrap pioneer exited to global private equity firm. Mentoring purpose-driven startups from Atlanta, GA.',
      links: ['Linkedin-in'],
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
              Empowering Innovation, Delivering Excellence
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              At CoderPush, we're united by our mission to empower businesses with cutting-edge software solutions that ignite innovation and propel growth. Our relentless commitment to excellence drives us to surpass expectations, ensuring our clients reach new heights of success.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="space-y-12">
            <h2 className="text-center text-3xl font-bold text-gray-900">Our Core Values</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
              {coreValues.map(value => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover="hover"
                  className="rounded-2xl border border-white/20 bg-white p-6 text-center shadow-xl"
                >
                  <div className="mb-4 text-4xl">{value.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div variants={itemVariants} className="space-y-12">
            <h2 className="text-center text-3xl font-bold text-gray-900">Leadership Team</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map(member => (
                <motion.div
                  key={member.name}
                  whileHover="hover"
                  variants={hoverEffect}
                  className="rounded-2xl border border-white/20 bg-white p-8 shadow-xl"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-purple-600">{member.role}</p>
                  </div>
                  <p className="mb-6 text-gray-600">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.links.map(link => (
                      <motion.a
                        key={link}
                        whileHover={{ scale: 1.1 }}
                        className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
                      >
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
            className="rounded-3xl border border-white/20 bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-center shadow-2xl"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">Join Our Mission</h2>
            <p className="mb-8 text-lg text-purple-100">
              Passionate about technology? Join CoderPush and be part of our mission to drive innovation and success.
            </p>
            <motion.button
              whileHover="hover"
              variants={hoverEffect}
              className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-600 transition-all duration-300 hover:shadow-xl"
            >
              Explore Career Opportunities
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
