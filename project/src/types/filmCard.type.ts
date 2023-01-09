import { Film } from './film';

export type Card = {
  film: Film;
  onMouseOver: (film: Film) => void;
}
