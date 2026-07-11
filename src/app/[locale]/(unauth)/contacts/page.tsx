import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { ContactForm } from '@/template/contactspage';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'ContactPage',
  });

  return {
    title: `${t('eyebrow')} | H&T AI TECH`,
    description: t('description'),
  };
}

const ContactsPage = async (props: {
  params: Promise<{ locale: string }>;
}) => {
  const params = await props.params;
  unstable_setRequestLocale(params.locale);

  return <ContactForm />;
};

export default ContactsPage;
