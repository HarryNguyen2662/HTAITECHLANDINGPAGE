import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { Section } from '@/features/landing/Section';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <div className="relative isolate overflow-hidden py-28">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-20 opacity-15">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.2))]" />
      </div>

      {/* Enhanced Background with Parallax Effect */}
      <div className="motion-safe:animate-parallax absolute inset-0 -z-10">
        <Image
          src="/assets/images/CTABG.jpg"
          alt="Innovative Technology Background"
          fill
          className="scale-110 object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-indigo-900/40 to-gray-800/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-10 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="animate-float absolute size-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <Section>
        <CTABanner
          title={t('title')}
          description={t('description')}
          titleClassName="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200 mb-6 animate-slide-up [animation-delay:0.2s] opacity-0 translate-y-8"
          descriptionClassName="text-xl text-gray-200/90 mb-12 max-w-2xl mx-auto animate-slide-up [animation-delay:0.3s] opacity-0 translate-y-8 hover:text-white transition-colors duration-300"
          buttons={(
            <a
              className={buttonVariants({
                variant: 'gradient',
                size: 'lg',
                className: `
                  text-lg px-8 py-6 rounded-xl
                  border-2 border-white/20
                  shadow-inner shadow-white/10
                  hover:shadow-lg hover:shadow-blue-500/30
                  hover:scale-[1.02] hover:border-white/40
                  active:scale-100 active:shadow-inner
                  transition-all duration-300
                  relative overflow-hidden
                  before:absolute before:inset-0
                  before:bg-[linear-gradient(120deg,transparent_0%,white_50%,transparent_100%)]
                  before:opacity-0 before:transition-opacity before:duration-500
                  hover:before:opacity-20
                  group
                `,
              })}
              href="/contact"
              style={{
                backgroundImage: 'linear-gradient(45deg, #6366f1, #3b82f6, #60a5fa)',
              }}
            >
              <span className="relative z-10 transition-all group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">
                {t('button_text')}
              </span>
            </a>
          )}
        />
      </Section>

      {/* Animated Border Effect */}
      <div className="animate-border-width absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-30" />
    </div>
  );
};
