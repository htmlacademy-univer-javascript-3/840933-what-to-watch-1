import { State } from '../../types/store';
import { Film } from '../../types/film';
import { Reducer } from '../../consts/reducers.enum';

export const getIsDataLoaded = (state: State): boolean =>
  state[Reducer.Data].isDataLoaded;
export const getFilms = (state: State): Film[] => state[Reducer.Data].films;
