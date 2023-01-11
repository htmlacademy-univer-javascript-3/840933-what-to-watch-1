import { Film } from './film.type';

export type Card = {
  film: Film;
  onMouseOver: (film: Film) => void;
}
