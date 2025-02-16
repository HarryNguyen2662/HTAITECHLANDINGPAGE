"use client";

import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Removed unused FeatureCard component

const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500">
      <Check className="h-4 w-4 text-white" />
    </div>
    <span className="text-white text-lg">{children}</span>
  </div>
);

export const WhatWeProvide = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Provide</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At H&T AI TECH, we implement a cohesive approach and agile methodology to ensure the efficient and 
            effective delivery of projects. We kick off by conducting a thorough analysis of client needs in the discovery 
            phase, promoting collaborative efforts to understand project objectives, timelines, and key deliverables.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden shadow-2xl transform transition-all hover:rotate-[1deg] hover:shadow-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 z-10" />
              <Image
                src="/assets/images/teamservice.png"
                alt="Collaborative team working on agile process"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Decorative connection element */}
            <div className="hidden lg:block absolute -right-24 top-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-500 blur-3xl opacity-20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="rounded-[2rem] bg-gradient-to-br from-gray-900 to-gray-800 p-10 shadow-2xl border border-gray-800 overflow-hidden">
              {/* Glowing accent */}
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text mb-4">
                    Scrum or Agile Methodology
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    With our streamlined process and agile methodology, clients can anticipate:
                  </p>
                </div>

                <div className="mb-8 space-y-6">
                  <CheckItem>Efficient Project Management</CheckItem>
                  <CheckItem>Accelerated timelines</CheckItem>
                  <CheckItem>High-quality Results That Consistently Exceed Expectations</CheckItem>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-5 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl"
                >
                  CONTACT US →
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};