import {State} from '../../types/store.type';
import { Reducer } from '../../enums/reducers.enum';

export const getCurrentGenre = (state: State): string => state[Reducer.Genre].currentGenre;
