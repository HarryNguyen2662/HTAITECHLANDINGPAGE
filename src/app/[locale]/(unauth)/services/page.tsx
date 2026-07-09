import { getTranslations, setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { Footer } from '@/template/Footer';
import { ServiceHero } from '@/template/HEROservice';
import { Navbar } from '@/template/Navbar';
import { Servicestemplate } from '@/template/Servicetemplate';
import { WhatWeProvide } from '@/template/whatweprovide';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const t = await getTranslations({
    locale: (await props.params).locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const ServicesPage = async (props: { params: Promise<{ locale: string }> }) => {
  setRequestLocale((await props.params).locale);

  return (
    <>
      <Navbar>
        <ServiceHero />
        <Servicestemplate />
        <WhatWeProvide />
        <CTA />
      </Navbar>
      <Footer />
    </>
  );
};

export default ServicesPage;

// {/*<Sponsors />*/}
