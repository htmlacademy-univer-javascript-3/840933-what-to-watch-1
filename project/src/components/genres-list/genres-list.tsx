import GenresItem from '../genres-item/genres-item';
import {Dispatch, SetStateAction} from 'react';

export type GenresListProps = {
  genres: string[],
  activeGenre: string,
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>
}

function GenresList({genres, activeGenre, setVisibleFilmsCount}: GenresListProps) {
  return (
    <ul className='catalog__genres-list'>
      {
        genres.map((genre) => <GenresItem key={genre} name={genre} isActive={genre === activeGenre} setVisibleFilmsCount={setVisibleFilmsCount}/>)
      }
    </ul>
  );
}

export default GenresList;
