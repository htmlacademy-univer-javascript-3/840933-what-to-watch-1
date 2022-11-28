import { createAction } from '@reduxjs/toolkit';

import { IFilm } from '../types/film.type';
import { Action } from '../constants/action.consts';

export const changeGenre = createAction<{genre: string}>(Action.CHANGE_GENRE);
export const fillFilms = createAction<{films: IFilm[]}>(Action.FILL_FILMS);
