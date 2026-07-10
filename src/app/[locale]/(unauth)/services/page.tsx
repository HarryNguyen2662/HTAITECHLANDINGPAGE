import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { ServiceHero } from '@/template/HEROservice';
import { Servicestemplate } from '@/template/Servicetemplate';
import { WhatWeProvide } from '@/template/whatweprovide';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Index',
  });

  return {
    title: `Services | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const ServicesPage = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <ServiceHero />
      <Servicestemplate />
      <WhatWeProvide />
      <CTA />
    </>
  );
};

export default ServicesPage;
