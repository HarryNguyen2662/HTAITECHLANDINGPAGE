import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { ServiceHero } from '@/template/HEROservice';
import { Servicestemplate } from '@/template/Servicetemplate';
import { WhatWeProvide } from '@/template/whatweprovide';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: `Services | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const ServicesPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

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
