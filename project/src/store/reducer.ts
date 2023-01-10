import { createReducer } from '@reduxjs/toolkit';

import { AppState } from '../types/redux.type';
import { changeGenre, fillFilms } from './actions';
import { mockFilms } from '../mocks/films.mock';
import { ALL_GENRES } from '../constants/film.const';

const initialState: AppState = {
  activeGenre: ALL_GENRES,
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
