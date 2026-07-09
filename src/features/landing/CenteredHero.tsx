import { Heading } from '@astryxdesign/core/Heading';
import { HStack } from '@astryxdesign/core/HStack';
import { Text } from '@astryxdesign/core/Text';

export const CenteredHero = (props: {
  banner: React.ReactNode;
  title: React.ReactNode;
  description: string;
  buttons: React.ReactNode;
}) => (
  <>
    <div className="text-center">{props.banner}</div>

    <Heading level={1} className="mt-3 text-center font-display text-5xl font-bold tracking-tight">
      {props.title}
    </Heading>

    <Text type="large" color="secondary" className="mx-auto mt-5 block max-w-screen-md text-center text-xl">
      {props.description}
    </Text>

    <HStack gap={3} justify="center" wrap="wrap" className="mt-8">
      {props.buttons}
    </HStack>
  </>
);
