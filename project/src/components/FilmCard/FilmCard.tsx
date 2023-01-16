import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { VideoPlayer } from '../VideoPlayer/VideoPlayer';
import { AppRoute } from '../../enums/route.enum';
import { Card } from '../../types/filmCard.type';

export const FilmCard = ({ film, onMouseOver }: Card) => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isNeedVideoToPlay, setIsNeedVideoPlay] = useState(false);

  useEffect(() => {
    let needUpdate = true;

    if (isNeedVideoToPlay) {
      setTimeout(() => needUpdate && setIsVideoPlaying(true), 1000);
    }

    return () => {
      needUpdate = false;
    };
  }, [isNeedVideoToPlay]);

  const handleFilmCardMouseLeave = () => {
    setIsNeedVideoPlay(false);
    setIsVideoPlaying(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => {
        onMouseOver(film);
        setIsNeedVideoPlay(true);
      }}
      onMouseLeave={handleFilmCardMouseLeave}
      onClick={() => navigate(`${AppRoute.FILM_ROUTE}/${film.id}`)}
    >
      <Link to={`${AppRoute.FILM_ROUTE}/${film.id}`} className="small-film-card__link">
        <div className="small-film-card__image">
          <VideoPlayer
            film={film}
            muted
            width={280}
            height={175}
            isPlaying={isVideoPlaying}
          />
        </div>
        <h3 className="small-film-card__title">
          {film.name}
        </h3>
      </Link>
    </article>
  );
};

