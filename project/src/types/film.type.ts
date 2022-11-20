export type IFilm = {
  id: number,
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  actors: string[];
  duration: 60;
  genre: string;
  released: number;
  isFavorite?: boolean;
  onMouseOver?: (film: IFilm) => void;
}
