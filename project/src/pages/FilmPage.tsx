import { Link, useParams } from 'react-router-dom';
import { FilmList } from '../components/FilmList/FilmList';

import { Logo } from '../components/Logo/Logo';
import { Tabs } from '../components/Tabs/Tabs';
import { IFilm } from '../types/film.type';
import { getFilmById } from '../utils/getFilmById';
import { NotFound } from './NotFound';
import { mockFilms } from '../mocks/films.mock';

export const FilmPage = (films: IFilm[]) => {
  const { id } = useParams();
  const film = getFilmById(mockFilms, Number(id));

  if (!film) {
    return <NotFound />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src="img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel"
            />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <header className="page-header film-card__head">
            <div className="logo">
              <Logo />
            </div>
            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src="img/avatar.jpg"
                    alt="User avatar"
                    width="{63}"
                    height="{63}"
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
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">The Grand Budapest Hotel</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">Drama</span>
                <span className="film-card__year">2014</span>
              </p>
              <div className="film-card__buttons">
                <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s" />
                  </svg>
                  Play
                </Link>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="{218}"
                height="{327}"
              />
            </div>
            <div className="film-card__desc">
              <Tabs {...film} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList {...films} />
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
    </>
  );
};

