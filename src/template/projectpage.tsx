'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { memo } from 'react';

import { ContainerEvaluation } from './ContainerEvaluation';
import { HelmetDetection } from './HelmetDetection';
import ProjectHero from './HEROproject';
import { TictactoeProject } from './tictactoeproject';
import { TrafficMonitoring } from './TrafficMonitoring';
import { TrafficSimulationProject } from './TrafficSimulationProject';

/*
const ImageWithFallback = memo(({ src, alt, ...props }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setLoading(true);
    setError(false);
  }, [src]);

  return (
    <div className="relative size-full">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <FaSpinner className="animate-spin text-4xl text-gray-400" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
          <div className="mb-2 text-sm text-gray-500">Image not found</div>
          <div className="text-xs text-gray-400">{alt}</div>
        </div>
      )}

      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        onLoadingComplete={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
});
*/

export const ProjectsShowcase = memo(() => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-12 sm:px-6 lg:px-8">
      <ProjectHero />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-20"
        >
          {/* AI Projects Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              AI, Smart City Project
            </h2>
          </motion.div>
          <motion.div variants={itemVariants} className="space-y-16">
            {/* Project 1 - Helmet Detection */}
            <HelmetDetection />
            {/* Project 2 - Container Evaluation */}
            <ContainerEvaluation />

            {/* Project 3 - Traffic Monitoring */}
            <TrafficMonitoring />
          </motion.div>
          {/* Tic Tac Toe Project */}
          <TictactoeProject />

          {/* Traffic Simulation Platform Section */}
          <TrafficSimulationProject />
          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-white/20 bg-gradient-to-r from-purple-600 to-pink-600 p-12 text-center shadow-2xl backdrop-blur-lg"
          >
            <h2 className="mb-6 text-3xl font-bold text-white">
              Innovate with Our AI Solutions
            </h2>
            <p className="mb-8 text-lg text-purple-100">
              Explore collaboration opportunities for your smart city or
              educational projects
            </p>

            <Link href="/contacts" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block cursor-pointer rounded-xl bg-white/90 px-8 py-4 font-semibold text-purple-600 shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
              >
                Request Project Demo
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
});

export default ProjectsShowcase;
