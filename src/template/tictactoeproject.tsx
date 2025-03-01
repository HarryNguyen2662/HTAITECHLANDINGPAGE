import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaDocker, FaGamepad } from 'react-icons/fa';
import { FaHelmetSafety } from 'react-icons/fa6';

import { Badge } from '@/components/ui/badge';

import { AppStoreButton } from './AppStoreButton';

const PLACEHOLDER_BLUR_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+';

export const TictactoeProject: React.FC = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120 },
    },
    hover: {
      y: -5,
      boxShadow:
        '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
  };

  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">
        Featured Game
      </h2>
      <motion.div
        whileHover="hover"
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl border border-white/20 bg-white p-8 shadow-xl backdrop-blur-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-50" />

        <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="mb-4 flex items-center gap-3">
              <FaGamepad className="text-3xl text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Tic Tac Toe AI
              </h3>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              <Badge className="flex items-center gap-1 bg-purple-100 px-3 py-1 text-purple-800">
                <FaHelmetSafety className="size-4" />
                <span>1M+ Downloads</span>
              </Badge>
              <Badge className="flex items-center gap-1 bg-pink-100 px-3 py-1 text-pink-800">
                <FaDocker className="size-4" />
                <span>Cross-platform</span>
              </Badge>
            </div>

            <p className="mb-6 leading-relaxed text-gray-600">
              Advanced AI opponent with multiple difficulty levels.
              5-in-a-row mode and cross-platform multiplayer support.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <AppStoreButton
                url="https://play.google.com/store/apps/details?id=com.HuuTai.TicTacToe_AI"
                platform="android"
                fullWidth={undefined}
                theme={undefined}
              />
              <AppStoreButton
                url="https://apps.apple.com/us/app/tic-tac-toe-ai-5-in-a-row/id1449597124"
                platform="ios"
                fullWidth={undefined}
                theme={undefined}
              />
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-xl border-4 border-white shadow-lg">
            <Image
              src="/assets/images/Tictactoe.png"
              alt="Game Preview"
              fill
              className="object-cover object-center"
              blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
              unoptimized={true}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
