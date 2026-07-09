import { Heading } from '@astryxdesign/core/Heading';
import { Text } from '@astryxdesign/core/Text';

export const FeatureCard = (props: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="group border-t-2 border-line pt-6 transition-colors duration-300 hover:border-primary">
    <div className="flex size-12 items-center justify-center rounded border border-line bg-secondary p-2.5 [&_svg]:size-full [&_svg]:stroke-graphite">
      {props.icon}
    </div>

    <Heading level={3} className="mt-5 font-display text-xl font-semibold">
      {props.title}
    </Heading>

    <Text type="body" color="secondary" className="mt-2 block text-base leading-relaxed">
      {props.children}
    </Text>
  </div>
);
