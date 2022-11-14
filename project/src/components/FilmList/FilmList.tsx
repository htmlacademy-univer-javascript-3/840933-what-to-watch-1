import { useState } from 'react';

import { IFilm } from '../../types/film.type';
import { Film } from '../Film/Film';

export const FilmList = (films: IFilm[]) => {
  const [, setActiveFilm] = useState<IFilm | null>(null);

  const handleMouseOver = (film: IFilm) => setActiveFilm(film);

  return (
    <div className="catalog__films-list">
      {Object.values(films).map((film) => <Film key={film.id} {...film} onMouseOver={handleMouseOver} />)}
    </div>
  );
};
