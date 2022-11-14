import { Link } from 'react-router-dom';

import { IFilm } from '../../types/film.type';

export const Film = (film: IFilm) => (
  <article className="small-film-card catalog__films-card">
    <div className="small-film-card__image">
      <img src={film.posterImage} alt={film.name} width="280" height="175"/>
    </div>
    <h3 className="small-film-card__title">
      <Link className="small-film-card__link" to={`/films/${film.id}`}>
        {film.name}
      </Link>
    </h3>
  </article>
);
