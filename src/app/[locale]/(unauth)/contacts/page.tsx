import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ContactForm } from '@/template/contactspage';
import { CTA } from '@/template/CTA';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'Index',
  });

  return {
    title: `Contact | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const ContactsPage = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;
  unstable_setRequestLocale(params.locale);

  return (
    <>
      <ContactForm />
      <CTA />
    </>
  );
};

export default ContactsPage;
