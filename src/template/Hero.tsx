import { Heading } from '@astryxdesign/core/Heading';
import { Link } from '@astryxdesign/core/Link';
import { Section } from '@astryxdesign/core/Section';
import { Text } from '@astryxdesign/core/Text';
import { useTranslations } from 'next-intl';

import { Reveal } from '@/components/motion/Reveal';
import { buttonVariants } from '@/components/ui/buttonVariants';
import { cn } from '@/utils/Helpers';

import { VideoPlayer } from './Videoplayer';

/* Viewfinder corner bracket, echoing the bounding boxes the products draw. */
const bracket = 'pointer-events-none absolute size-5 border-primary';

export const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <Section variant="transparent" padding={0} className="px-3 py-16 lg:py-24">
      <div className="mx-auto grid max-w-screen-lg grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <Text type="label" color="secondary" className="font-mono text-xs uppercase tracking-[0.2em]">
              {t('eyebrow')}
            </Text>
          </Reveal>

          <Reveal delay={0.08}>
            <Heading level={1} className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
              {t.rich('title', {
                important: chunks => (
                  <span className="text-primary">{chunks}</span>
                ),
              })}
            </Heading>
          </Reveal>

          <Reveal delay={0.16}>
            <Text type="large" color="secondary" className="mt-6 block max-w-lg leading-relaxed">
              {t('description')}
            </Text>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                color="inherit"
                className={cn(buttonVariants({ size: 'lg' }), 'rounded px-6')}
                href="/project"
              >
                {t('primary_button')}
              </Link>
              <Link
                color="inherit"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'rounded border-ink px-6 text-foreground hover:bg-secondary',
                )}
                href="/contacts"
              >
                {t('secondary_button')}
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Exhibit: the one signature treatment on this page */}
        <Reveal delay={0.2} y={28}>
          <div className="relative">
            <div className="border border-ink">
              <div className="border-b border-ink bg-ink px-4 py-2">
                <Text type="label" color="inherit" className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper">
                  {t('exhibit_label')}
                </Text>
              </div>
              <div className="relative p-2">
                <VideoPlayer url="https://youtu.be/UqmzedIvqfI" autoPlay={false} />

                {/* Viewfinder overlay: corner brackets + a few scan passes on load */}
                <div className="pointer-events-none absolute inset-2" aria-hidden="true">
                  <span className={`${bracket} left-0 top-0 border-l-2 border-t-2`} />
                  <span className={`${bracket} right-0 top-0 border-r-2 border-t-2`} />
                  <span className={`${bracket} bottom-0 left-0 border-b-2 border-l-2`} />
                  <span className={`${bracket} bottom-0 right-0 border-b-2 border-r-2`} />
                  <span className="animate-exhibit-scan absolute inset-x-0 h-0.5 bg-primary/60 opacity-0" />
                </div>
              </div>
            </div>
            <Text type="supporting" color="secondary" className="mt-3 block max-w-md font-mono text-xs leading-relaxed">
              {t('exhibit_caption')}
            </Text>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};
