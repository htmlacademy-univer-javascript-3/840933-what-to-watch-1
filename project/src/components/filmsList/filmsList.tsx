import { useState, useCallback } from 'react';

import { FilmCard } from '../CardItem/CardItem';
import { Film } from '../../types/film';

export type FilmsProps = {
  films: Film[];
};

export const FilmsList = ({ films }: FilmsProps) => {
  const [activeFilm, setActiveFilm] = useState<Film | null>(null);

  const handleMouseOver = useCallback((film: Film) => {
    if (film !== activeFilm) {
      setActiveFilm(film);
    }
  }, [activeFilm]);

  return (
    <div className="catalog__films-list">
      {films.map((film: Film) => (
        <FilmCard key={film.id} film={film} onMouseOver={handleMouseOver} />
      ))}
    </div>
  );
};
