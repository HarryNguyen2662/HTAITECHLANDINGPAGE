import { Section } from '@astryxdesign/core/Section';
import { useTranslations } from 'next-intl';

import { CenteredHero } from '@/features/landing/CenteredHero';

export const HowweworkHero = () => {
  const t = useTranslations('HowweworkService');

  return (
    <Section variant="transparent" padding={0} className="px-3 py-20">
      <div className="mx-auto max-w-screen-lg">
        <CenteredHero
          title={t.rich('title', {
            important: chunks => <span className="text-primary">{chunks}</span>,
          })}
          description={t('description')}
          banner={undefined}
          buttons={<div />}
        />
      </div>
    </Section>
  );
};
