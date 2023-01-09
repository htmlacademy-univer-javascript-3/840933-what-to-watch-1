import { combineReducers } from '@reduxjs/toolkit';

import { Reducer } from '../consts/reducers.enum';
import { filmReducer } from './film-reducer/film-reducer';
import { genreReducer } from './genre-reducer/genre-reducer';
import { userReducer } from './user-reducer/user-reducer';
import { dataReducer } from './data-reducer/data-reducer';

export const rootReducer = combineReducers({
  [Reducer.Data]: dataReducer.reducer,
  [Reducer.Films]: filmReducer.reducer,
  [Reducer.User]: userReducer.reducer,
  [Reducer.Genre]: genreReducer.reducer,
});
