import moment from 'moment';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/filmReducer/selector';
import { AppRoute } from '../../enums/route.enum';
import { getFilmInfoAction } from '../../api/apiActionFilm';

export const Player = () => {
  const film = useAppSelector(getCurrentFilm);
  const [isPlaying, setIsPlaying] = useState(false);
  const dispatch = useAppDispatch();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    dispatch(getFilmInfoAction(Number(film?.id)));
  }, [dispatch, film?.id]);

  const handleIsPlayClick = useCallback(() => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleFullScreenVideo = useCallback(() => {
    if (videoRef.current?.requestFullscreen) {
      videoRef.current?.requestFullscreen();
    }
  }, []);

  const handleProgressBar = useCallback(() => {
    const durationTime = videoRef?.current?.duration;
    const currentTime = videoRef?.current?.currentTime;

    if (durationTime && currentTime) {
      setProgress((currentTime / durationTime) * 100);
      setTimeLeft(durationTime - currentTime);
    }
  }, []);

  const formatTime = useCallback((seconds: number) => {
    const hours = seconds / 60 / 60;
    const timeToFormat = seconds * 1000;

    if (hours >= 1) {
      return moment(timeToFormat).format('-hh:mm:ss');
    }

    return moment(timeToFormat).format('-mm:ss');
  }, []);

  return (
    <div className="player">
      <video
        src={film?.videoLink}
        className="player__video"
        poster={film?.backgroundImage}
        ref={videoRef}
        onTimeUpdate={() => handleProgressBar()}
      />
      <Link
        type="button"
        className="player__exit"
        to={`${AppRoute.FILM_ROUTE}/${film?.id}`}
      >
        Exit
      </Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100" />
            <div className="player__toggler" style={{ left: `${progress}%` }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{formatTime(timeLeft)}</div>
        </div>
        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={handleIsPlayClick}
          >
            {isPlaying ? (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause" />
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </>
            )}
          </button>
          <div className="player__name">
            {film?.name}
          </div>
          <button
            type="button"
            className="player__full-screen"
            onClick={handleFullScreenVideo}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};
