import { State } from '../../types/store';
import { Reducer } from '../../consts/reducers.enum';
import { Film } from '../../types/film';
import { Review } from '../../types/review';

export const getSimilarFilms = (state: State): Film[] =>
  state[Reducer.Films].similarFilms;
export const getCurrentFilm = (state: State): Film | null =>
  state[Reducer.Films].currentFilm;
export const getReviews = (state: State): Review[] =>
  state[Reducer.Films].reviews;
export const getFavoriteFilms = (state: State): Film[] =>
  state[Reducer.Films].favoriteFilms;
export const getPromoFilm = (state: State): Film | null =>
  state[Reducer.Films].promoFilm;
