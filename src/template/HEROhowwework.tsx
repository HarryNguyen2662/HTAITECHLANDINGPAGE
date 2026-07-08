import { useTranslations } from 'next-intl';

import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const HowweworkHero = () => {
  const t = useTranslations('HowweworkService');

  return (
    <Section className="py-20">
      <CenteredHero
        title={t.rich('title', {
          important: chunks => <span className="text-primary">{chunks}</span>,
        })}
        description={t('description')}
        banner={undefined}
        buttons={<div />}
      />
    </Section>
  );
};
