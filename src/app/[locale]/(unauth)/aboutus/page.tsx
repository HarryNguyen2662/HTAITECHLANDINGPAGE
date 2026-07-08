import { getTranslations, setRequestLocale } from 'next-intl/server';

import { AboutUs } from '@/template/aboutuspage';
import { Footer } from '@/template/Footer';
import { Navbar } from '@/template/Navbar';

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
      <Navbar />
      <AboutUs />
      <Footer />
    </>
  );
};

export default ServicesPage;

// {/*<Sponsors />*/}
