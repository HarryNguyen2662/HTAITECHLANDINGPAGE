import { getTranslations, setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { Footer } from '@/template/Footer';
import { Hero } from '@/template/Hero';
import { Navbar } from '@/template/Navbar';
import { Process } from '@/template/Process';
import { Services } from '@/template/Services';

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

const IndexPage = async (props: { params: Promise<{ locale: string }> }) => {
  setRequestLocale((await props.params).locale);

  return (
    <>
      <Navbar>
        <Hero />
        <Services />
        <Process />
        <CTA />
      </Navbar>
      <Footer />
    </>
  );
};

export default IndexPage;

// {/*<Sponsors />*/}
