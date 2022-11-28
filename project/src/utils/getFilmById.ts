import { IFilm } from '../types/film.type';

export function getFilmById(filmList: IFilm[], filmId: number): IFilm | undefined {
  return filmList.find((film) => film.id === filmId);
}
