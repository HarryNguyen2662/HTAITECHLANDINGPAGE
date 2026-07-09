import { Link } from '@astryxdesign/core/Link';
import { Section } from '@astryxdesign/core/Section';

import { CenteredHero } from '@/features/landing/CenteredHero';

export const ProjectHero = () => {
  return (
    <Section variant="transparent" padding={0} className="px-3 py-20">
      <div className="mx-auto max-w-screen-lg">
        <CenteredHero
          title={(
            <>
              AI systems we've
              {' '}
              <span className="text-primary">shipped, not just prototyped</span>
            </>
          )}
          description="Helmet detection, container inspection, traffic enforcement, and a driving-exam simulator used by thousands. Real systems, built for Vietnam's smart cities."
          buttons={(
            <Link
              href="/contacts"
              color="inherit"
              className="inline-block bg-primary px-8 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Talk to the team
            </Link>
          )}
          banner={undefined}
        />
      </div>
    </Section>
  );
};

export default ProjectHero;
