import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ProjectsShowcase } from '@/template/projectpage';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: `Projects | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const ProjectPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return <ProjectsShowcase />;
};

export default ProjectPage;
