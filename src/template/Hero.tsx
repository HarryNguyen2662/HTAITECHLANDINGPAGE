import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { buttonVariants } from '@/components/ui/buttonVariants';
import { Section } from '@/features/landing/Section';
import { cn } from '@/utils/Helpers';

import { VideoPlayer } from './Videoplayer';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section className="py-16 lg:py-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {t('eyebrow')}
          </p>

          <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            {t.rich('title', {
              important: chunks => (
                <span className="text-primary">{chunks}</span>
              ),
            })}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {t('description')}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              className={cn(buttonVariants({ size: 'lg' }), 'rounded px-6')}
              href="/project"
            >
              {t('primary_button')}
            </Link>
            <Link
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'rounded border-ink px-6 text-foreground hover:bg-secondary',
              )}
              href="/contacts"
            >
              {t('secondary_button')}
            </Link>
          </div>
        </div>

        {/* Exhibit — the one signature treatment on this page */}
        <div className="relative">
          <div className="border-ink border">
            <div className="border-ink bg-ink flex items-center justify-between border-b px-4 py-2">
              <span className="text-paper font-mono text-[11px] font-medium uppercase tracking-[0.15em]">
                {t('exhibit_label')}
              </span>
              <span className="text-paper/50 font-mono text-[11px] tabular-nums">01</span>
            </div>
            <div className="p-2">
              <VideoPlayer url="https://youtu.be/UqmzedIvqfI" autoPlay={false} />
            </div>
          </div>
          <p className="mt-3 max-w-md font-mono text-xs leading-relaxed text-muted-foreground">
            {t('exhibit_caption')}
          </p>
        </div>
      </div>
    </Section>
  );
};
