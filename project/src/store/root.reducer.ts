import { combineReducers } from '@reduxjs/toolkit';

import { Reducer } from '../enums/reducers.enum';
import { filmReducer } from './filmReducer/film.reducer';
import { genreReducer } from './genreReducer/genre.reducer';
import { userReducer } from './userReducer/user.reducer';
import { dataReducer } from './dataReducer/data.reducer';

export const rootReducer = combineReducers({
  [Reducer.Data]: dataReducer.reducer,
  [Reducer.Films]: filmReducer.reducer,
  [Reducer.User]: userReducer.reducer,
  [Reducer.Genre]: genreReducer.reducer,
});
