import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { LocaleSwitcher } from '@/components/LocaleSwitcher';
// import { buttonVariants } from '@/components/ui/buttonVariants';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';

import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');

  return (
    <Section className="px-3 py-6">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <>
            {/* PRO: Dark mode toggle button */}
            <li data-fade>
              <LocaleSwitcher />
            </li>
          </>
        )}
      >
        <li>
          <Link href="/howwework">{t('How_We_Work')}</Link>
        </li>

        <li>
          <Link href="/services">{t('Services')}</Link>
        </li>

        <li>
          <Link href="/">{t('Our_Projects')}</Link>
        </li>

        <li>
          <Link href="/aboutus">{t('About_Us')}</Link>
        </li>

        <li>
          <Link href="/contacts">{t('Contact')}</Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};

/*
            <li className="ml-1 mr-2.5" data-fade>
              <Link href="/sign-in">{t('sign_in')}</Link>
            </li>
            <li>
              <Link className={buttonVariants()} href="/sign-up">
                {t('sign_up')}
              </Link>
            </li>
*/
