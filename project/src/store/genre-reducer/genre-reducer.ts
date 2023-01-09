import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '../../consts/reducers.enum';
import { ALL_GENRES } from '../../constants';

type GenreReducer = {
  currentGenre: string;
};

export const initialState: GenreReducer = {
  currentGenre: ALL_GENRES,
};

export const genreReducer = createSlice({
  name: Reducer.Genre,
  initialState,
  reducers: {
    changeGenre: (state, action) => {
      state.currentGenre = action.payload;
    },
  },
});

export const { changeGenre } = genreReducer.actions;
