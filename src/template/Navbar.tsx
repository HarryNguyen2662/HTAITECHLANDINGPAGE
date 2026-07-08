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
    <Section className="border-b border-line px-3 py-5">
      <CenteredMenu
        logo={<Logo />}
        rightMenu={(
          <li data-fade>
            <LocaleSwitcher />
          </li>
        )}
      >
        <li>
          <Link href="/howwework" className="font-medium">{t('How_We_Work')}</Link>
        </li>

        <li>
          <Link href="/services" className="font-medium">{t('Services')}</Link>
        </li>

        <li>
          <Link href="/project" className="font-medium">{t('Our_Projects')}</Link>
        </li>

        <li>
          <Link href="/aboutus" className="font-medium">{t('About_Us')}</Link>
        </li>

        <li>
          <Link
            href="/contacts"
            className="rounded border border-primary px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            {t('Contact')}
          </Link>
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

                              images: [
                    '/assets/images/helmet1.png',
                    '/assets/images/helmet2.png',
                    '/assets/images/helmet3.png',
                    '/assets/images/helmet1.png',
                  ],
*/
