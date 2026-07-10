import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AboutUs } from '@/template/aboutuspage';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Index',
  });

  return {
    title: `About | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const AboutUsPage = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;
  unstable_setRequestLocale(params.locale);

  return <AboutUs />;
};

export default AboutUsPage;
