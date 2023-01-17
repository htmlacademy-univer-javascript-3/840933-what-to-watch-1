import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import { UserBlock } from '../../components/User/User';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { Tabs } from '../../components/Tabs/Tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { NotFound } from '../NotFound/NotFound';
import { Play } from '../../components/PlayButton/Play';
import { MyList } from '../../components/MyList/MyList';
import { AuthorizationStatus } from '../../enums/auth.enum';
import { AppRoute } from '../../enums/route.enum';
import {
  getCurrentFilm,
  getSimilarFilms,
} from '../../store/filmReducer/selector';
import { getAuthorizationStatus } from '../../store/userReducer/selector';
import {
  getFilmCommentAction,
  getFilmInfoAction,
  getFilmSimilarAction,
} from '../../api/apiActionFilm';
import { ActiveTab } from '../../enums/tab.enum';
import { Spinner } from '../../components/Spinner/Spinner';

export const Movie = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const id = Number(params.id);
  const [activeTab, setActiveTab] = useState(ActiveTab.Overview);
  const currentFilm = useAppSelector(getCurrentFilm);
  const similarFilms = useAppSelector(getSimilarFilms);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (!currentFilm || currentFilm.id !== id) {
      dispatch(getFilmInfoAction(id));
      dispatch(getFilmSimilarAction(id));
      dispatch(getFilmCommentAction(id));
    }
  }, [currentFilm, dispatch, id]);

  if (!currentFilm) {
    return <NotFound />;
  }

  if (currentFilm.id !== id) {
    return <Spinner />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
          </div>
          <header className="page-header film-card__head">
            <Logo light={false} />
            <UserBlock />
          </header>
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm?.genre}</span>
                <span className="film-card__year">
                  {currentFilm?.released}
                </span>
              </p>

              <div className="film-card__buttons">
                <Play filmId={currentFilm.id} />
                {authorizationStatus === AuthorizationStatus.Auth &&
                    <MyList />}
                {authorizationStatus === AuthorizationStatus.Auth &&
                    <Link
                      to={`${AppRoute.FILM_ROUTE}/${id}/review`}
                      className="btn film-card__button"
                    >
                      Add review
                    </Link>}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentFilm?.posterImage}
                alt={`${currentFilm?.name} poster`}
                width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li
                    className={
                      activeTab === ActiveTab.Overview
                        ? 'film-nav__item film-nav__item--active'
                        : 'film-nav__item'
                    }
                  >
                    <Link
                      to="#"
                      className="film-nav__link"
                      onClick={() =>
                        setActiveTab(ActiveTab.Overview)}
                    >
                        Overview
                    </Link>
                  </li>
                  <li
                    className={
                      activeTab === ActiveTab.Details
                        ? 'film-nav__item film-nav__item--active'
                        : 'film-nav__item'
                    }
                  >
                    <Link
                      to="#"
                      className="film-nav__link"
                      onClick={() =>
                        setActiveTab(ActiveTab.Details)}
                    >
                        Details
                    </Link>
                  </li>
                  <li
                    className={
                      activeTab === ActiveTab.Review
                        ? 'film-nav__item film-nav__item--active'
                        : 'film-nav__item'
                    }
                  >
                    <Link
                      to="#"
                      className="film-nav__link"
                      onClick={() => setActiveTab(ActiveTab.Review)}
                    >
                        Reviews
                    </Link>
                  </li>
                </ul>
              </nav>
              <Tabs activeTab={activeTab} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={similarFilms.slice(0, 4)} />
        </section>
        <Footer />
      </div>
    </>
  );
};
