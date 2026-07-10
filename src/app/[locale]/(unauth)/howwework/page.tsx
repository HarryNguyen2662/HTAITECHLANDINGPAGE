import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { HowweworkHero } from '@/template/HEROhowwework';
import Howweworkstep from '@/template/howweworkstep';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Index',
  });

  return {
    title: `How We Work | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const HowweworkPage = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <HowweworkHero />
      <Howweworkstep />
      <CTA />
    </>
  );
};

export default HowweworkPage;
