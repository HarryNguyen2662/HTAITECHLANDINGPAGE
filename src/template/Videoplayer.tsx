'use client';

import dynamic from 'next/dynamic';
import { memo, useRef, useState } from 'react';
import { FaSpinner } from 'react-icons/fa';
import type ReactPlayerType from 'react-player';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

type VideoPlayerProps = {
  url: string;
  autoPlay?: boolean;
};

export const VideoPlayer = memo(({ url, autoPlay = true }: VideoPlayerProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const playerRef = useRef<ReactPlayerType | null>(null);

  return (
    <div className="bg-ink relative aspect-video overflow-hidden">
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <FaSpinner className="text-paper/60 animate-spin text-3xl" />
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div className="text-paper/80 text-sm">Failed to load video</div>
          <button
            type="button"
            onClick={() => {
              setError(false);
              setLoading(true);
              if (playerRef.current) {
                playerRef.current.getInternalPlayer()?.loadVideoById?.(url);
              }
            }}
            className="border-paper/30 text-paper hover:bg-paper/10 rounded border px-4 py-2 text-sm font-medium"
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
    </div>
  );
});
