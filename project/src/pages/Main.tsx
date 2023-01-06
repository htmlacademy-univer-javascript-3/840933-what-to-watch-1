import { PromoFilmCard } from '../components/PromoFilm/PromoFilm';
import { FilmList } from '../components/FilmList/FilmList';
import { IMainPage } from '../types/mainPage.type';
import { Logo } from '../components/Logo/Logo';
import { useAppSelector } from '../hooks';
import { INIT_ACTIVE_GENRE } from '../constants/film.const';
import { GenresList } from '../components/Genre/GenresList/GenresList';

export const MainPage = ({ promoFilm }: IMainPage) => {
  const { films, activeGenre } = useAppSelector((state) => state);
  const genres = [INIT_ACTIVE_GENRE].concat([...new Set(films.map((film) => film.genre))]);
  const filteredFilms = films.filter((film) => film.genre === activeGenre || activeGenre === INIT_ACTIVE_GENRE);

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
            <button className="catalog__button" type="button">
              Show more
            </button>
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
