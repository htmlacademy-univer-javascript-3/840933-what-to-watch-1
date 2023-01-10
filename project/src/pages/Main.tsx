import { useState } from 'react';

import { PromoFilmCard } from '../components/PromoFilm/PromoFilm';
import { FilmList } from '../components/FilmList/FilmList';
import { IMainPage } from '../types/mainPage.type';
import { Logo } from '../components/Logo/Logo';
import { useAppSelector } from '../hooks';
import { ALL_GENRES } from '../constants/film.const';
import { GenresList } from '../components/Genre/GenresList/GenresList';
import { FIRST_LOAD_FILMS_RENDER_COUNT } from '../constants/film.const';
import { ShowMoreButton } from '../components/ShowMore/ShowMoreButton';

export const MainPage = ({ promoFilm }: IMainPage) => {
  const { films, activeGenre } = useAppSelector((state) => state);
  const [showedFilmsCount, setShowedFilmsCount] = useState(FIRST_LOAD_FILMS_RENDER_COUNT);
  const genres = [ALL_GENRES]
    .concat([...new Set(films.map((film) => film.genre))]);
  const filteredFilms = films
    .filter((film) => film.genre === activeGenre || activeGenre === ALL_GENRES)
    .slice(0, showedFilmsCount);

  const handleMoreClick = () => {
    setShowedFilmsCount(showedFilmsCount + FIRST_LOAD_FILMS_RENDER_COUNT);
  };

  return (
    <section>
      <PromoFilmCard
        name={promoFilm.name}
        genre={promoFilm.genre}
        creationYear={promoFilm.creationYear}
      />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genres={genres} activeGenre={activeGenre}/>
          <FilmList {...filteredFilms} />
          <div className="catalog__more">
            {filteredFilms.length >= FIRST_LOAD_FILMS_RENDER_COUNT && <ShowMoreButton onClick={handleMoreClick}/>}
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Logo />
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};
