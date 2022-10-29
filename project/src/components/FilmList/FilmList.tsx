/* eslint-disable no-console */
import { IFilm } from '../../types/film.type';
import { Film } from '../Film/Film';

export const FilmList = (films: IFilm[]) => (
  <div className="catalog__films-list">
    {Object.values(films).map((film) => <Film key={film.id} {...film} />)}
  </div>
);
