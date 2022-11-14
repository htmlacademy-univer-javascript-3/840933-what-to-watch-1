import { useEffect, useRef } from 'react';

import { IPlayer } from '../../types/videoPlayer.type';

export const Player = ({
  source,
  preview,
  muted,
  width,
  height,
  isPlaying
}: IPlayer) => {
  const playerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isPlaying) {
      playerRef.current?.play();
    }

    playerRef.current?.load();
  }, [isPlaying]);

  return (
    <video
      poster={preview}
      width={width}
      height={height}
      muted={muted}
      src={source}
      ref={playerRef}
    />
  );
};
