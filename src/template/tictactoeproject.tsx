import Image from 'next/image';
import { FaDownload, FaGamepad, FaLayerGroup } from 'react-icons/fa';

import { Badge } from '@/components/ui/badge';

import { AppStoreButton } from './AppStoreButton';

const PLACEHOLDER_BLUR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+';

export const TictactoeProject: React.FC = () => {
  return (
    <div className="border border-line bg-background">
      <div className="grid items-center gap-8 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
            Shipped product
          </p>
          <div className="flex items-center gap-3">
            <FaGamepad className="text-2xl text-primary" />
            <h3 className="font-display text-2xl font-semibold text-foreground">
              Tic Tac Toe AI
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="flex items-center gap-1.5 rounded-none border-line font-mono text-xs font-normal text-muted-foreground">
              <FaDownload className="size-3.5" />
              <span>1M+ downloads</span>
            </Badge>
            <Badge variant="outline" className="flex items-center gap-1.5 rounded-none border-line font-mono text-xs font-normal text-muted-foreground">
              <FaLayerGroup className="size-3.5" />
              <span>Cross-platform</span>
            </Badge>
          </div>

          <p className="leading-relaxed text-muted-foreground">
            An advanced AI opponent with multiple difficulty levels, a
            5-in-a-row mode, and cross-platform multiplayer support.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <AppStoreButton
              url="https://play.google.com/store/apps/details?id=com.HuuTai.TicTacToe_AI"
              platform="android"
            />
            <AppStoreButton
              url="https://apps.apple.com/us/app/tic-tac-toe-ai-5-in-a-row/id1449597124"
              platform="ios"
            />
          </div>
        </div>

        <div className="relative aspect-square overflow-hidden border border-line">
          <Image
            src="/assets/images/Tictactoe.png"
            alt="Tic Tac Toe AI game preview"
            fill
            className="object-cover object-center"
            blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};
