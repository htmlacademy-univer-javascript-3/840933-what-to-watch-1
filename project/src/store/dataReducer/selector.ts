import { State } from '../../types/store.type';
import { Film } from '../../types/film.type';
import { Reducer } from '../../enums/reducers.enum';

export const getIsDataLoaded = (state: State): boolean =>
  state[Reducer.Data].isLoaded;
export const getFilms = (state: State): Film[] => state[Reducer.Data].films;
