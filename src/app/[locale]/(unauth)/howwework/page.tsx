import { getTranslations, setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { Footer } from '@/template/Footer';
import { HowweworkHero } from '@/template/HEROhowwework';
import Howweworkstep from '@/template/howweworkstep';
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

const HowweworkPage = async (props: { params: Promise<{ locale: string }> }) => {
  setRequestLocale((await props.params).locale);

  return (
    <>
      <Navbar>
        <HowweworkHero />
        <Howweworkstep />
        <CTA />
      </Navbar>
      <Footer />
    </>
  );
};

export default HowweworkPage;

// {/*<Sponsors />*/}
