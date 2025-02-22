import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AboutUs } from '@/template/aboutuspage';
import { Footer } from '@/template/Footer';
import { Navbar } from '@/template/Navbar';

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

const ServicesPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
};

export default ServicesPage;

// {/*<Sponsors />*/}
