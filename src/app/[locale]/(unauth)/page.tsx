import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { DemoBanner } from '@/template/DemoBanner';
import { FAQ } from '@/template/FAQ';
import { Features } from '@/template/Features';
import { Footer } from '@/template/Footer';
import { Hero } from '@/template/Hero';
import { Navbar } from '@/template/Navbar';
import { Pricing } from '@/template/Pricing';
import { Services } from '@/template/Services';
import { Process } from '@/template/Process';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </>
  );
};

export default IndexPage;

// {/*<Sponsors />*/}
