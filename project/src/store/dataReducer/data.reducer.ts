import { createSlice } from '@reduxjs/toolkit';

import { Reducer } from '../../enums/reducers.enum';
import { getFilmsAction } from '../../api/apiActionFilm';
import { Film } from '../../types/film.type';

type DataReducer = {
  films: Film[];
  isLoaded: boolean;
};

export const initialState: DataReducer = {
  films: [],
  isLoaded: false,
};

export const dataReducer = createSlice({
  name: Reducer.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getFilmsAction.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(getFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoaded = true;
      });
  },
});
