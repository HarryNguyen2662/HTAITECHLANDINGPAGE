import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Background } from '@/components/Background';
import { FeatureCard } from '@/features/landing/FeatureCard';
import { Section } from '@/features/landing/Section';

export const Servicestemplate = () => {
  const t = useTranslations('Servicesforpage');

  return (
    <Background>
      <Section
        title={t('section_title')}
        description={t('section_description')}
      >
        <div className="grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/artificial-intelligence.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step1_title')}
          >
            {t('step1_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <Image
                src="/assets/images/mvp.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step2_title')}
          >
            {t('step2_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <Image
                src="/assets/images/QA.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step3_title')}
          >
            {t('step3_description')}
          </FeatureCard>

          <FeatureCard
            icon={(
              <Image
                src="/assets/images/business.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step4_title')}
          >
            {t('step4_description')}
          </FeatureCard>
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/database-management.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step5_title')}
          >
            {t('step5_description')}
          </FeatureCard>
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/app-store.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step6_title')}
          >
            {t('step6_description')}
          </FeatureCard>
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/web-design.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step7_title')}
          >
            {t('step7_description')}
          </FeatureCard>
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/android.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step8_title')}
          >
            {t('step8_description')}
          </FeatureCard>
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/machine-learning.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step9_title')}
          >
            {t('step9_description')}
          </FeatureCard>
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/dataengineering.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step10_title')}
          >
            {t('step10_description')}
          </FeatureCard>
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/frontend.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step11_title')}
          >
            {t('step11_description')}
          </FeatureCard>
          <FeatureCard
            icon={(
              <Image
                src="/assets/images/pipeline.png"
                alt="Innovation Icon"
                width={100}
                height={100}
              />
            )}
            title={t('step12_title')}
          >
            {t('step12_description')}
          </FeatureCard>
        </div>
      </Section>
    </Background>
  );
};