import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { Footer } from '@/template/Footer';
import { HowweworkHero } from '@/template/HEROhowwework';
import Howweworkstep from '@/template/howweworkstep';
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

const HowweworkPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <Navbar />
      <HowweworkHero />
      <Howweworkstep />
      <CTA />
      <Footer />
    </>
  );
};

export default HowweworkPage;

// {/*<Sponsors />*/}
