import { motion } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';

type VideoDemoButtonProps = {
  url: string;
  color?: 'purple' | 'blue';
};

export const VideoDemoButton = ({ url, color = 'purple' }: VideoDemoButtonProps) => {
  const colors = {
    purple:
        'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
    blue: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700',
  };

  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-white shadow-lg transition-all ${colors[color]}`}
    >
      <FaYoutube className="text-xl" />
      <span className="font-semibold">Watch Demo</span>
    </motion.a>
  );
};
