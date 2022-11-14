import { IFilm } from '../types/film.type';
import { Genre } from '../types/genre.type';

export const filterFilmByGenre = (films: IFilm[], genre: Genre) => films.filter(
  (film) => film.genre === genre
);

