import { Link } from '@astryxdesign/core/Link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { CTABanner } from '@/features/landing/CTABanner';
import { cn } from '@/utils/Helpers';

export const CTA = () => {
  const t = useTranslations('CTA');

  return (
    <div className="bg-ink py-24">
      <div className="mx-auto max-w-screen-lg px-3">
        <CTABanner
          title={t('title')}
          description={t('description')}
          buttons={(
            <Link
              color="inherit"
              className={cn(buttonVariants({ size: 'lg' }), 'rounded px-8')}
              href="/contacts"
            >
              {t('button_text')}
            </Link>
          )}
        />
      </div>
    </div>
  );
};
