import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { CTA } from '@/template/CTA';
import { Hero } from '@/template/Hero';
import { Process } from '@/template/Process';
import { ProjectTeaser } from '@/template/ProjectTeaser';
import { ProofStrip } from '@/template/ProofStrip';
import { Services } from '@/template/Services';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const IndexPage = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;
  unstable_setRequestLocale(params.locale);

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
