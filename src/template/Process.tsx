import React from 'react';
import Image from 'next/image';
import { Section } from '@/features/landing/Section';

const FeatureCard = ({ number, title, children }) => (
  <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:shadow-xl hover:scale-105">
    <div className="flex items-start gap-6">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">
        {number}
      </span>
      <div className="flex-1">
        <h3 className="mb-3 text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{children}</p>
      </div>
    </div>
  </div>
);

export const Process = () => {
  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Section
          title="Welcome to H&T AI Tech: Where Innovation Takes Center Stage!"
          description="Start Your Software Development Journey with Us"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <Image
                src="/assets/images/colab.jpg"
                alt="Innovation Image"
                width={600}
                height={400}
                className="mx-auto mb-8"
              />
              <p className="mb-8 text-xl text-gray-600">
                At H&T AI Tech, we know that the initial stages of onboarding and scaling up are crucial for any software development project. Our detailed and methodical approach ensures that every project is launched and carried out with accuracy, paving the way for success. Here’s our process:
              </p>
            </div>

            <div className="flex-1">
              <div className="absolute left-1/2 h-5/6 w-1 bg-gradient-to-b from-blue-200 to-purple-200 transform -translate-x-1/2"></div>

              {/* Feature Cards with staggered animation */}
              <div className="space-y-12">
                <div className="animate-fade-in-up opacity-0 translate-y-10 animation-delay-100">
                  <FeatureCard number="1" title="Discovery">
                    In this stage, we thoroughly explore your project’s needs, objectives, and vision. We examine every detail to fully understand your requirements, enabling us to design a solution that fits your goals perfectly.
                  </FeatureCard>
                </div>

                <div className="animate-fade-in-up opacity-0 translate-y-10 animation-delay-200">
                  <FeatureCard number="2" title="Evaluation">
                    Using the knowledge gained during discovery, we carefully analyze different strategies and methods to identify the best way forward. Our focus is on aligning our work with your targets to deliver outstanding results.
                  </FeatureCard>
                </div>

                <div className="animate-fade-in-up opacity-0 translate-y-10 animation-delay-300">
                  <FeatureCard number="3" title="Assemble Team">
                    Whether you select our pre-assembled team or handpick experts from our vast talent pool, you can be confident in our capabilities. Our team members are experienced, dedicated, and eager to bring your ideas to life.
                  </FeatureCard>
                </div>

                <div className="animate-fade-in-up opacity-0 translate-y-10 animation-delay-400">
                  <FeatureCard number="4" title="Operate">
                    With your team ready, we begin the development process, closely monitoring progress and ensuring clear, open communication throughout. At H&T AI Tech, you’ll always stay informed and involved at every stage.
                  </FeatureCard>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <div className="mt-10 text-center">
          <button className="rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 px-10 py-4 text-xl font-semibold text-white transition-all hover:scale-105 hover:shadow-lg">
            Contact us now to Experience the H&T AI TECH Advantage
          </button>
        </div>
      </div>
    </div>
  );
};

// Tailwind CSS Configuration for Animations (Add to tailwind.config.js)
/*
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
*/