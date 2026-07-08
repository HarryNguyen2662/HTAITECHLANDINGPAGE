import { FaFilePdf, FaVideo } from 'react-icons/fa';

import { Badge } from '@/components/ui/badge';

import { AppStoreButton } from './AppStoreButton';
import { VideoDemoButton } from './VideoDemoButton';
import { VideoPlayer } from './Videoplayer';

export const TrafficSimulationProject: React.FC = () => {
  return (
    <div className="border border-line bg-background">
      <div className="grid items-center gap-8 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Shipped product
          </p>
          <h3 className="font-display text-2xl font-semibold text-foreground">
            Traffic Simulation Platform
          </h3>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1.5 rounded-none border-line font-mono text-xs font-normal text-muted-foreground">
              <FaFilePdf className="size-3.5" />
              <span>Training docs</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1.5 rounded-none border-line font-mono text-xs font-normal text-muted-foreground">
              <FaVideo className="size-3.5" />
              <span>Video guides</span>
            </Badge>
          </div>

          <p className="leading-relaxed text-muted-foreground">
            A comprehensive training system for traffic law education, with
            AI-powered evaluation and real-time feedback — the same engine
            behind our driving-exam simulator.
          </p>

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
