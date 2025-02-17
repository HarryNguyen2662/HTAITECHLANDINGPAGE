//import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

//import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const HowweworkHero = () => {
  const t = useTranslations("HowweworkService");

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
        description={t('description')}
        banner={undefined}
        buttons={<div></div>} // Add appropriate buttons content here
      />
    </Section>
  );
};