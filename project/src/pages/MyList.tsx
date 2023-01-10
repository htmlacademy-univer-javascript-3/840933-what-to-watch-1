import { Link } from 'react-router-dom';

import { Film } from '../components/Film/Film';
import { Logo } from '../components/Logo/Logo';
import { useAppSelector } from '../hooks';
import { ALL_GENRES } from '../constants/film.const';
import { GenresList } from '../components/Genre/GenresList/GenresList';


export const MyList = () => {
  const { films, activeGenre } = useAppSelector((state) => state);
  const genres = [ALL_GENRES].concat([...new Set(films.map((film) => film.genre))]);
  const filteredFilms = films
    .filter((film) => film.genre === activeGenre || activeGenre === ALL_GENRES);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Logo />
        </div>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width={63}
                height={63}
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link to="/login" className="user-block__link">
            Sign out
            </Link>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          <GenresList genres={genres} activeGenre={activeGenre}/>
          {Object.values(filteredFilms).map((film) => <Film key={film.id} {...film} />)}
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
  );
};

