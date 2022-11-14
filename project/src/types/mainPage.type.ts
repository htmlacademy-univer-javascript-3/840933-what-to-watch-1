import { IFilm } from './film.type';
import { IPromoFilm } from './promoFilm.type';

export type IMainPage = {
  films: IFilm[];
  limit: number;
  promoFilm: IPromoFilm;
};
