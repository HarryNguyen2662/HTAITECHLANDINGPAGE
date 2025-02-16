import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const ServiceHero = () => {
  const t = useTranslations('HeroService');

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
        banner={undefined}
      />
    </Section>
  );
};