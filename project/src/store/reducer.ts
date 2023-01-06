import { createReducer } from '@reduxjs/toolkit';

import { AppState } from '../types/redux.type';
import { changeGenre, fillFilms } from './actions';
import { mockFilms } from '../mocks/films.mock';
import { INIT_ACTIVE_GENRE } from '../constants/film.const';

const initialState: AppState = {
  activeGenre: INIT_ACTIVE_GENRE,
  films: mockFilms
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      const { genre } = action.payload;
      state.activeGenre = genre;
    })
    .addCase(fillFilms, (state, action) => {
      const { films } = action.payload;
      state.films = films;
    });
});
