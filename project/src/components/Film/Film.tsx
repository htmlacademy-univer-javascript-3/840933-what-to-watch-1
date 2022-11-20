import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { IFilm } from '../../types/film.type';
import { Player } from '../Player/Player';
import { PLAYER_DELAY } from '../../constants/player.const';

export const Film = (film: IFilm) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isDelayed, setIsDelayed] = useState(false);
  const { onMouseOver, videoLink, previewImage, name, id } = film;

  useEffect(() =>{
    let startPlay = true;

    if (isDelayed) {
      setTimeout(() => {
        if (startPlay) {
          setIsPlaying(true);
        }
      }, PLAYER_DELAY);
    }

    return () => {
      startPlay = false;
    };
  }, [isDelayed, isPlaying]);

  const handleMouseOver = () => {
    onMouseOver?.(film);
    setIsDelayed(true);
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    setIsDelayed(false);
  };

  return (
    <article className="small-film-card catalog__films-card"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <Player source={videoLink}
          preview={previewImage}
          muted
          isPlaying={isPlaying}
          height="175"
          width="280"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );};
