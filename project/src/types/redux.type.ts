import { IFilm } from './film.type';
import { store } from '../store';

export type AppState = {
    films: IFilm[];
    activeGenre: string;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
