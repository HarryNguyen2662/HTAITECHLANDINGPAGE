import { motion } from 'framer-motion';
import { memo, useRef, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import ReactPlayer from 'react-player';

type VideoPlayerProps = {
  url: string;
  autoPlay?: boolean;
};

export const VideoPlayer = memo(({ url, autoPlay = true }: VideoPlayerProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const playerRef = useRef<ReactPlayer | null>(null);

  return (
    <motion.div
      className="relative aspect-video overflow-hidden rounded-xl border-4 border-white shadow-lg"
      whileHover={{ scale: 1.02 }}
    >
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <FaSpinner className="animate-spin text-4xl text-white" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/10">
          <div className="mb-2 text-red-500">Failed to load video</div>
          <button
            type="button"
            onClick={() => {
              setError(false);
              setLoading(true);
              if (playerRef.current) {
                playerRef.current.getInternalPlayer()?.loadVideoById?.(url);
              }
            }}
            className="rounded-lg bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100"
          >
            Retry
          </button>
        </div>
      )}

      <div className="aspect-video">
        <ReactPlayer
          ref={playerRef}
          url={url}
          playing={autoPlay}
          width="100%"
          height="100%"
          loop
          onReady={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          config={{
            youtube: {
              playerVars: {
                autoplay: autoPlay ? 1 : 0,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                mute: 1,
              },
            },
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-600/20 to-purple-600/20" />
    </motion.div>
  );
});
