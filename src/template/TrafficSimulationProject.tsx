import { Badge } from '@astryxdesign/core/Badge';
import { Heading } from '@astryxdesign/core/Heading';
import { HStack } from '@astryxdesign/core/HStack';
import { Text } from '@astryxdesign/core/Text';
import { FaFilePdf, FaVideo } from 'react-icons/fa';

import { AppStoreButton } from './AppStoreButton';
import { VideoDemoButton } from './VideoDemoButton';
import { VideoPlayer } from './Videoplayer';

export const TrafficSimulationProject: React.FC = () => {
  return (
    <div className="border border-line bg-background">
      <div className="grid items-center gap-8 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <Text type="label" color="secondary" className="block font-mono text-xs uppercase tracking-[0.15em]">
            Shipped product
          </Text>
          <Heading level={3} className="font-display text-2xl font-semibold">
            Traffic Simulation Platform
          </Heading>

          <HStack gap={2} wrap="wrap">
            <Badge variant="neutral" icon={<FaFilePdf className="size-3.5" />} label="Training docs" />
            <Badge variant="neutral" icon={<FaVideo className="size-3.5" />} label="Video guides" />
          </HStack>

          <Text type="body" color="secondary" className="block leading-relaxed">
            A comprehensive training system for traffic law education, with
            AI-powered evaluation and real-time feedback — the same engine
            behind our driving-exam simulator.
          </Text>

          <div className="flex flex-col gap-3 sm:flex-row">
            <AppStoreButton
              url="https://play.google.com/store/apps/details?id=ht.ai.tech_luyen_thi_mo_phong"
              platform="android"
            />
            <AppStoreButton
              url="https://apps.apple.com/us/app/luy%E1%BB%87n-thi-m%C3%B4-ph%E1%BB%8Fng-120-th/id6479661300"
              platform="ios"
            />
            <VideoDemoButton
              url="https://youtu.be/UqmzedIvqfI"
              color="purple"
            />
          </div>
        </div>

        <div className="border border-line">
          <VideoPlayer url="https://www.youtube.com/watch?v=UqmzedIvqfI" autoPlay={false} />
        </div>
      </div>
    </div>
  );
};
