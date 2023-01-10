import { createSlice } from '@reduxjs/toolkit';

import { Film } from '../../types/film.type';
import { Reducer } from '../../enums/reducers.enum';
import { Review } from '../../types/review.type';
import {
  getFavoriteFilmsAction,
  getFilmCommentAction,
  getFilmInfoAction,
  getFilmSimilarAction,
  getPromoFilmAction,
  setFavoriteFilmAction,
} from '../../api/apiActionFilm';

export type AppState = {
  reviews: Review[];
  similarFilms: Film[];
  currentFilm: Film | null;
  favoriteFilms: Film[];
  promoFilm: Film | null;
};

export const initialState: AppState = {
  similarFilms: [],
  favoriteFilms: [],
  reviews: [],
  currentFilm: null,
  promoFilm: null,
};

export const filmReducer = createSlice({
  name: Reducer.Films,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPromoFilmAction.fulfilled, (state, action) => {
        state.promoFilm = action.payload;
        state.currentFilm = action.payload;
      })
      .addCase(getFilmInfoAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
      })
      .addCase(getFilmCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(getFilmSimilarAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(getFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
      })
      .addCase(setFavoriteFilmAction.fulfilled, (state, action) => {
        state.currentFilm = action.payload;
        if (state.currentFilm.isFavorite) {
          state.favoriteFilms.push(state.currentFilm);
        } else {
          state.favoriteFilms = state.favoriteFilms.filter(
            (film) => film.id !== state.currentFilm?.id
          );
        }
      });
  },
});

export default filmReducer;
