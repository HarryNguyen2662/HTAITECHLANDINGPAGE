import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AboutUs } from '@/template/aboutuspage';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: `About Us | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const AboutUsPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return <AboutUs />;
};

export default AboutUsPage;
