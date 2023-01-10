import { combineReducers } from '@reduxjs/toolkit';

import { Reducer } from '../enums/reducers.enum';
import { filmReducer } from './filmReducer/filmReducer';
import { genreReducer } from './genreReducer/genreReducer';
import { userReducer } from './userReducer/userReducer';
import { dataReducer } from './dataReducer/dataReducer';

export const rootReducer = combineReducers({
  [Reducer.Data]: dataReducer.reducer,
  [Reducer.Films]: filmReducer.reducer,
  [Reducer.User]: userReducer.reducer,
  [Reducer.Genre]: genreReducer.reducer,
});
