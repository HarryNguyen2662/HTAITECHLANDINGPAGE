import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ContactForm } from '@/template/contactspage';
import { CTA } from '@/template/CTA';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: `Contact | ${t('meta_title')}`,
    description: t('meta_description'),
  };
}

const ContactsPage = (props: { params: { locale: string } }) => {
  unstable_setRequestLocale(props.params.locale);

  return (
    <>
      <ContactForm />
      <CTA />
    </>
  );
};

export default ContactsPage;
