import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { HowweworkHero } from '@/template/HEROhowwework';
import Howweworkstep from '@/template/howweworkstep';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: `How We Work | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const HowweworkPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <HowweworkHero />
      <Howweworkstep />
      <CTA />
    </>
  );
};

export default HowweworkPage;
