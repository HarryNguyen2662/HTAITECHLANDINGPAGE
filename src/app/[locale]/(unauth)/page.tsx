import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { Hero } from '@/template/Hero';
import { Process } from '@/template/Process';
import { ProjectTeaser } from '@/template/ProjectTeaser';
import { ProofStrip } from '@/template/ProofStrip';
import { Services } from '@/template/Services';

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
      <Hero />
      <ProofStrip />
      <Services />
      <Process />
      <ProjectTeaser />
      <CTA />
    </>
  );
};

export default IndexPage;
