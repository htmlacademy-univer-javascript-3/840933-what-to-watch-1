import { useMemo, useState } from 'react';

import { Logo } from '../../components/Logo/Logo';
import { Footer } from '../../components/Footer/Footer';
import { UserBlock } from '../../components/User/User';
import { FilmsList } from '../../components/FilmsList/FilmsList';
import { GenresList } from '../../components/GenresList/GenresList';
import { useAppSelector } from '../../hooks';
import { ShowMore } from '../../components/ShowMore/ShowMore';
import { Play } from '../../components/PlayButton/Play';
import { MyList } from '../../components/MyList/MyList';
import { getFilms } from '../../store/dataReducer/selector';
import { getCurrentGenre } from '../../store/genreReducer/selector';
import { getPromoFilm } from '../../store/filmReducer/selector';
import { ALL_GENRES, VISIBLE_FILMS, VISIBLE_GENRES } from '../../constants';
import { AuthorizationStatus } from '../../enums/auth.enum';
import { getAuthorizationStatus } from '../../store/userReducer/selector';

export const Main = () => {
  const [visibleFilmsCount, setVisibleFilmsCount] = useState<number>(VISIBLE_FILMS);
  const currentGenre = useAppSelector(getCurrentGenre);
  const films = useAppSelector(getFilms);
  const promoFilm = useAppSelector(getPromoFilm);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const filteredFilms = useMemo(
    () => currentGenre === ALL_GENRES
      ? films
      : films.filter((film) => film.genre === currentGenre), [currentGenre, films]
  );
  const genres = [...new Set(films.map((film) => film.genre))].slice(
    0,
    VISIBLE_GENRES
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
                <Play filmId={promoFilm?.id} />
                {authorizationStatus === AuthorizationStatus.Auth && <MyList />}
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
          {filteredFilms.length > visibleFilmsCount && <ShowMore setVisibleFilmsCount={setVisibleFilmsCount} />}
        </section>
        <Footer />
      </div>
    </>
  );
};
