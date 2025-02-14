import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

export const Services = () => {
  const t = useTranslations('Services');

  return (
    <Background>
      <Section
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2">
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/staff.png"
                alt="Innovation Icon"
                width={50}
                height={50}
              />
            )}
            title={t('step1_title')}
          >
            {t('step1_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <Image
                src="/assets/images/brainstorm.png"
                alt="Innovation Icon"
                width={50}
                height={50}
              />
            )}
            title={t('step2_title')}
          >
            {t('step2_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <Image
                src="/assets/images/coding.png"
                alt="Innovation Icon"
                width={50}
                height={50}
              />
            )}
            title={t('step3_title')}
          >
            {t('step3_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <Image
                src="/assets/images/innovation.png"
                alt="Innovation Icon"
                width={50}
                height={50}
              />
            )}
            title={t('step4_title')}
          >
            {t('step4_description')}
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};