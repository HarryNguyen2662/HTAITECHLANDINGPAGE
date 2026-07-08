import Link from 'next/link';

import { CenteredHero } from '@/features/landing/CenteredHero';
import { Section } from '@/features/landing/Section';

export const ProjectHero = () => {
  return (
    <Section className="py-20">
      <CenteredHero
        title={(
          <>
            AI systems we've
            {' '}
            <span className="text-primary">shipped, not just prototyped</span>
          </>
        )}
        description="Helmet detection, container inspection, traffic enforcement, and a driving-exam simulator used by thousands — real computer-vision systems built for Vietnam's smart cities."
        buttons={(
          <Link
            href="/contacts"
            className="inline-block bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Talk to the team
          </Link>
        )}
        banner={undefined}
      />
    </Section>
  );
};

export default ProjectHero;
