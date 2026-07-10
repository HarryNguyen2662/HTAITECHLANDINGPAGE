import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ProjectsShowcase } from '@/template/projectpage';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Index',
  });

  return {
    title: `Projects | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const ProjectPage = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;
  unstable_setRequestLocale(params.locale);

  return <ProjectsShowcase />;
};

export default ProjectPage;
