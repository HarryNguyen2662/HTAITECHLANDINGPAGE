import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

type AppStoreButtonProps = {
  url: string;
  platform: 'android' | 'ios' | 'macos';
  fullWidth?: boolean;
  theme?: 'purple' | 'blue';
};

export const AppStoreButton = ({ url, platform, fullWidth, theme }: AppStoreButtonProps) => {
  const themeColors = {
    purple: 'from-purple-600 to-pink-600',
    blue: 'from-blue-600 to-cyan-600',
  };

  const platformData = {
    android: {
      color: theme ? themeColors[theme] : 'from-green-600 to-green-700',
      icon: <FaGooglePlay className="text-lg" />,
      text: 'Google Play',
    },
    ios: {
      color: theme ? themeColors[theme] : 'from-blue-500 to-blue-600',
      icon: <FaApple className="text-lg" />,
      text: 'App Store',
    },
    macos: {
      color: theme ? themeColors[theme] : 'from-gray-800 to-gray-900',
      icon: <FaApple className="text-lg" />,
      text: 'Mac App Store',
    },
  };

  return (
    <motion.a
      whileHover={{ y: -2 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${fullWidth ? 'w-full' : ''} group relative overflow-hidden rounded-xl bg-gradient-to-r ${platformData[platform].color} p-px shadow-lg transition-all hover:shadow-xl`}
    >
      <div className="flex items-center justify-center gap-2 rounded-[11px] bg-white/90 px-6 py-3.5 backdrop-blur-sm transition-all group-hover:bg-white/95">
        {platformData[platform].icon}
        <span className="font-semibold text-gray-900">
          {platformData[platform].text}
        </span>
      </div>
    </motion.a>
  );
};
