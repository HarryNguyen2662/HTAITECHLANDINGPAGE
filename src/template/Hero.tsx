import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-36 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <div className="absolute inset-0 bg-[url('/assets/images/grid.svg')] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.1),transparent)]" />
      </div>

      <CenteredHero
        title={t.rich('title', {
          important: chunks => (
            <span className="relative bg-gradient-to-r from-indigo-400 via-blue-300 to-purple-400 bg-clip-text text-transparent animate-gradient-shine">
              <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500/30 via-blue-500/30 to-purple-500/30 blur-2xl rounded-full" />
              {chunks}
            </span>
          ),
        })}
        titleClassName="text-5xl md:text-7xl font-bold text-balance mb-8 drop-shadow-[0_5px_35px_rgba(99,102,241,0.3)]"
        description={t('description')}
        descriptionClassName="text-xl text-gray-300/90 max-w-2xl mx-auto mb-12 backdrop-blur-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
        buttons={(
          <div className="flex gap-4">
            {/* Primary Button */}
            <a
              className={buttonVariants({
                size: 'lg',
                className: `
                  px-10 py-5 rounded-xl
                  bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500
                  border-2 border-white/30
                  shadow-[0_4px_30px_-10px_rgba(99,102,241,0.5)]
                  hover:shadow-[0_8px_40px_-10px_rgba(99,102,241,0.6)]
                  hover:scale-[1.02]
                  active:scale-95
                  transition-all duration-300
                  relative overflow-hidden
                  before:absolute before:inset-0
                  before:bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.3)_50%,transparent_80%)]
                  before:opacity-0 before:transition-opacity before:duration-500
                  hover:before:opacity-100
                  group
                `,
              })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              <span className="relative z-10 font-semibold tracking-wide group-hover:drop-shadow-[0_0_12px_rgba(165,180,252,0.8)] transition-all">
                {t('primary_button')}
              </span>
            </a>

            {/* Secondary Button */}
            <a
              className={buttonVariants({
                variant: 'outline',
                size: 'lg',
                className: `
                  px-10 py-5 rounded-xl
                  border-2 border-indigo-300/50
                  bg-gradient-to-br from-white/5 to-indigo-500/10
                  shadow-[0_4px_30px_-10px_rgba(99,102,241,0.3)]
                  hover:shadow-[0_8px_40px_-10px_rgba(99,102,241,0.4)]
                  hover:bg-indigo-500/20
                  hover:border-indigo-300/80
                  hover:scale-[1.02]
                  active:scale-95
                  transition-all duration-300
                  backdrop-blur-sm
                  group
                `,
              })}
              href="https://github.com/ixartz/SaaS-Boilerplate"
            >
              <span className="text-indigo-400 group-hover:text-white transition-colors duration-300 font-medium">
                {t('secondary_button')}
              </span>
            </a>
          </div>
        )}
        banner={undefined}
      />
    </Section>
  );
};