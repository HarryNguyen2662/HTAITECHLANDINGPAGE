'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';


export const ProjectHero = () => {
  // Keep useTranslations import for future use

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  // Hardcoded title with JSX for styling
  const heroTitle = (
    <>
      Innovative
      {' '}
      <span className="animate-gradient-shine relative bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
        <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-2xl" />
        AI Solutions
      </span>
      {' '}
      for Smart Cities
    </>
  );

  // Hardcoded description
  const heroDescription = 'Exploring the intersection of artificial intelligence and urban development with cutting-edge projects that transform how we interact with our environment.';

  return (
    <Section className="relative overflow-hidden py-36">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.1),transparent)]" />
        <div className="absolute left-1/2 top-1/2 size-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-300/20 via-purple-400/20 to-pink-300/20 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <CenteredHero
          title={heroTitle}
          description={heroDescription}
          buttons={(
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link href="/project" passHref>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(139, 92, 246, 1)' }}
                  className="inline-block cursor-pointer rounded-xl bg-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300"
                >
                  Explore AI Projects
                </motion.div>
              </Link>
              <Link href="/contacts" passHref>
                <motion.div
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                  className="inline-block cursor-pointer rounded-xl border border-purple-200 bg-white/90 px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all duration-300"
                >
                  Request Demo
                </motion.div>
              </Link>
            </motion.div>
          )} banner={undefined}        />
      </motion.div>
    </Section>
  );
};

export default ProjectHero;
