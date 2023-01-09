import { useState } from 'react';

import { Logo } from '../../components/logo/logo';
import { Footer } from '../../components/footer/footer';
import { UserBlock } from '../../components/user-block/user-block';
import { FilmsList } from '../../components/filmsList/filmsList';
import GenresList from '../../components/genres-list/genres-list';
import { useAppSelector } from '../../hooks';
import { ShowMoreButton } from '../../components/ShowMoreButton/showMoreButton';
import { PlayButton } from '../../components/play-button/play-button';
import { MyListButton } from '../../components/myListButton/myListButton';
import { getFilms } from '../../store/data-reducer/selector';
import { getCurrentGenre } from '../../store/genre-reducer/selector';
import { getPromoFilm } from '../../store/film-reducer/selector';
import { ALL_GENRES, AuthorizationStatus, VISIBLE_FILMS_COUNT, VISIBLE_GENRES_COUNT } from '../../constants';
import { getAuthorizationStatus } from '../../store/user-reducer/selector';

function Main() {
  const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(VISIBLE_FILMS_COUNT);
  const currentGenre = useAppSelector(getCurrentGenre);
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const filteredFilms =
    currentGenre === ALL_GENRES
      ? films
      : films.filter((film) => film.genre === currentGenre);
  const genres = [...new Set(films.map((film) => film.genre))].slice(
    0,
    VISIBLE_GENRES_COUNT
  );
  const filmListToRender = filteredFilms.slice(0, visibleFilmsCount);

  genres.unshift(ALL_GENRES);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
        </div>
        <header className="page-header film-card__head">
          <Logo light={false} />
          <UserBlock />
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={promoFilm?.posterImage}
                alt={promoFilm?.name}
                width="218"
                height="327"
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>
              <div className="film-card__buttons">
                <PlayButton filmId={promoFilm?.id} />
                {authorizationStatus === AuthorizationStatus.Auth && <MyListButton />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList
            genres={genres}
            activeGenre={currentGenre}
            setVisibleFilmsCount={setVisibleFilmsCount}
          />
          <FilmsList films={filmListToRender} />
          {filteredFilms.length > visibleFilmsCount && <ShowMoreButton setVisibleFilmsCount={setVisibleFilmsCount} />}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Main;
