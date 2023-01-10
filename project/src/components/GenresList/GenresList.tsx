import {Dispatch, SetStateAction} from 'react';

import { Genre } from '../Genre/Genre';

export type GenresListProps = {
  genres: string[],
  activeGenre: string,
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>
}

export const GenresList = ({genres, activeGenre, setVisibleFilmsCount}: GenresListProps) => (
  <ul className='catalog__genres-list'>
    {
      genres.map((genre) => <Genre key={genre} name={genre} isActive={genre === activeGenre} setVisibleFilmsCount={setVisibleFilmsCount}/>)
    }
  </ul>
);
