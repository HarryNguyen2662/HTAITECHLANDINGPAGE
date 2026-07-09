import { Heading } from '@astryxdesign/core/Heading';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { FeatureCard } from '@/features/landing/FeatureCard';

export const Servicestemplate = () => {
  const t = useTranslations('Servicesforpage');

  return (
    <Section variant="muted" padding={0} className="px-3 py-16">
      <div className="mx-auto mb-12 max-w-screen-md text-center">
        <Heading level={2} className="font-display text-3xl font-semibold">
          {t('section_title')}
        </Heading>
        <Text type="large" color="secondary" className="mt-2 block">
          {t('section_description')}
        </Text>
      </div>

      <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-3">
        <FeatureCard
          index={0}
          icon={(
            <Image
              src="/assets/images/artificial-intelligence.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step1_title')}
        >
          {t('step1_description')}
        </FeatureCard>

        <FeatureCard
          index={1}
          icon={(
            <Image
              src="/assets/images/mvp.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step2_title')}
        >
          {t('step2_description')}
        </FeatureCard>

        <FeatureCard
          index={2}
          icon={(
            <Image
              src="/assets/images/QA.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step3_title')}
        >
          {t('step3_description')}
        </FeatureCard>

        <FeatureCard
          index={0}
          icon={(
            <Image
              src="/assets/images/business.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step4_title')}
        >
          {t('step4_description')}
        </FeatureCard>
        <FeatureCard
          index={1}
          icon={(
            <Image
              src="/assets/images/database-management.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step5_title')}
        >
          {t('step5_description')}
        </FeatureCard>
        <FeatureCard
          index={2}
          icon={(
            <Image
              src="/assets/images/app-store.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step6_title')}
        >
          {t('step6_description')}
        </FeatureCard>
        <FeatureCard
          index={0}
          icon={(
            <Image
              src="/assets/images/web-design.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step7_title')}
        >
          {t('step7_description')}
        </FeatureCard>
        <FeatureCard
          index={1}
          icon={(
            <Image
              src="/assets/images/android.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step8_title')}
        >
          {t('step8_description')}
        </FeatureCard>
        <FeatureCard
          index={2}
          icon={(
            <Image
              src="/assets/images/machine-learning.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step9_title')}
        >
          {t('step9_description')}
        </FeatureCard>
        <FeatureCard
          index={0}
          icon={(
            <Image
              src="/assets/images/dataengineering.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step10_title')}
        >
          {t('step10_description')}
        </FeatureCard>
        <FeatureCard
          index={1}
          icon={(
            <Image
              src="/assets/images/frontend.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step11_title')}
        >
          {t('step11_description')}
        </FeatureCard>
        <FeatureCard
          index={2}
          icon={(
            <Image
              src="/assets/images/pipeline.png"
              alt="Innovation Icon"
              width={28}
              height={28}
            />
          )}
          title={t('step12_title')}
        >
          {t('step12_description')}
        </FeatureCard>
      </div>
    </Section>
  );
};
