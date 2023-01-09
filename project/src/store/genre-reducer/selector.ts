import {State} from '../../types/store';
import { Reducer } from '../../consts/reducers.enum';

export const getCurrentGenre = (state: State): string => state[Reducer.Genre].currentGenre;
