import { Genre } from '../Genre/Genre';
import { IGenresList } from './genresList.type';

export const GenresList = ({ genres, activeGenre }: IGenresList) => (
  <ul className='catalog__genres-list'>
    {genres.map((genre) => <Genre key={genre} genre={genre} isActive={genre === activeGenre}/>)}
  </ul>
);
