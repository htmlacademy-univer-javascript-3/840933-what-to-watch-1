import { useEffect, useRef } from 'react';

import { Film } from '../../types/film.type';

type PlayerProps = {
  film: Film;
  muted: boolean;
  width: number;
  height: number;
  isPlaying: boolean;
};

export const VideoPlayer = ({ film, muted, width, height, isPlaying }: PlayerProps) => {
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoPlayerRef === null) {
      return;
    }

    if (isPlaying) {
      videoPlayerRef.current?.play();
    } else {
      videoPlayerRef.current?.load();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoPlayerRef}
      src={film.videoLink}
      poster={film.previewImage}
      muted={muted}
      width={width}
      height={height}
    />
  );
};
