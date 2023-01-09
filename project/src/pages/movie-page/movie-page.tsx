import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { UserBlock } from '../../components/user-block/user-block';
import { FilmsList } from '../../components/filmsList/filmsList';
import { Tabs } from '../../components/tabs/tabs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { NotFound } from '../not-found/not-found';
import { PlayButton } from '../../components/play-button/play-button';
import { MyListButton } from '../../components/myListButton/myListButton';
import { AuthorizationStatus } from '../../constants';
import { AppRoute } from '../../consts/route.enum';
import {
  getCurrentFilm,
  getSimilarFilms,
} from '../../store/film-reducer/selector';
import { getAuthorizationStatus } from '../../store/user-reducer/selector';
import {
  getFilmCommentAction,
  getFilmInfoAction,
  getFilmSimilarAction,
} from '../../api/apiActionFilm';
import LoadingPage from '../loading-page/loading-page';
import { ActiveTab } from '../../consts/tab.enum';

function MoviePage() {
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
    return <LoadingPage />;
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
                <PlayButton filmId={currentFilm.id} />
                {authorizationStatus === AuthorizationStatus.Auth &&
                    <MyListButton />}
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
}

export default MoviePage;
