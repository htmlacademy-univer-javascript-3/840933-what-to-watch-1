import {Film} from '../../types/film';
import {useEffect, useRef} from 'react';

type PlayerProps = {
  film: Film;
  muted: boolean;
  width: number;
  height: number;
  isPlaying: boolean;
}

function VideoPlayer(props:PlayerProps) {
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoPlayerRef === null) {
      return;
    }

    if (props.isPlaying) {
      videoPlayerRef.current?.play();
    } else {
      videoPlayerRef.current?.load();
    }

  }, [props.isPlaying]);
  return (
    <video
      ref={videoPlayerRef}
      src={props.film.videoLink}
      poster={props.film.previewImage}
      muted={props.muted}
      width={props.width}
      height={props.height}
    />
  );
}

export default VideoPlayer;
