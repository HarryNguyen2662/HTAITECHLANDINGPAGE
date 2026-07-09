import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';

export const CTABanner = (props: {
  title: string;
  description: string;
  buttons: React.ReactNode;
}) => (
  <div className="mx-auto max-w-2xl px-6 py-10 text-center">
    <Heading level={2} color="inherit" className="font-display text-3xl font-semibold text-paper sm:text-4xl">
      {props.title}
    </Heading>

    <Text type="large" color="inherit" className="mt-4 block text-paper/70">
      {props.description}
    </Text>

    <div className="mt-8">{props.buttons}</div>
  </div>
);
