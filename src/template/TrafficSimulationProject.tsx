import { motion } from 'framer-motion';
import { FaChartLine, FaCity, FaFilePdf, FaVideo } from 'react-icons/fa';

import { Badge } from '@/components/ui/badge';

import { AppStoreButton } from './AppStoreButton';
import { VideoDemoButton } from './VideoDemoButton';
import { VideoPlayer } from './Videoplayer';

export const TrafficSimulationProject: React.FC = () => {
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
        Training Solutions
      </h2>
      <motion.div
        whileHover="hover"
        variants={itemVariants}
        className="relative overflow-hidden rounded-2xl border border-white/20 bg-white p-8 shadow-xl backdrop-blur-lg"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />

        <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="mb-4 flex items-center gap-3">
              <FaCity className="text-3xl text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                Traffic Simulation Platform
              </h3>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
              <Badge className="flex items-center gap-1 bg-blue-100 px-3 py-1 text-blue-800">
                <FaFilePdf className="size-4" />
                <span>Training Docs</span>
              </Badge>
              <Badge className="flex items-center gap-1 bg-purple-100 px-3 py-1 text-purple-800">
                <FaChartLine className="size-4" />
                <span>AI Evaluation</span>
              </Badge>
              <Badge className="flex items-center gap-1 bg-pink-100 px-3 py-1 text-pink-800">
                <FaVideo className="size-4" />
                <span>Video Guides</span>
              </Badge>
            </div>

            <p className="mb-6 leading-relaxed text-gray-600">
              Comprehensive training system for traffic law education
              with AI-powered evaluation and real-time feedback.
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

          <div className="group relative aspect-video overflow-hidden rounded-xl border-4 border-white shadow-lg">
            <VideoPlayer url="https://www.youtube.com/watch?v=UqmzedIvqfI" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
