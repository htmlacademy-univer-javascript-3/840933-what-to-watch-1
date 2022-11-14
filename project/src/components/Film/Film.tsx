import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IFilm } from '../../types/film.type';
import { Player } from '../Player/Player';
import { PLAYER_DELAY } from '../../constants/player.const';

export const Film = (film: IFilm) => {
  const [isPlayVideo, setIsPlayVideo] = useState(false);
  const [isDelayEnd, setIsDelayEnd] = useState(false);

  useEffect(() =>{
    let startPlay = true;

    if (isDelayEnd) {
      setTimeout(() => {
        if (startPlay) {
          setIsPlayVideo(!isPlayVideo);
        }
      }, PLAYER_DELAY);
    }

    return () => {
      startPlay = false;
    };
  }, [isDelayEnd, isPlayVideo]);

  const handleMouseOver = () => {
    film.onMouseOver?.(film);
    setIsDelayEnd(true);
  };

  const handleMouseLeave = () => {
    setIsPlayVideo(false);
    setIsDelayEnd(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <Player source={film.videoLink}
          preview={film.previewImage}
          muted
          isPlaying={isPlayVideo}
          height="175"
          width="280"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );};
