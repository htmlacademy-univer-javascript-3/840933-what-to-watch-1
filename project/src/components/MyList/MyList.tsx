import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  getFilmInfoAction,
  setFavoriteFilmAction,
} from '../../api/apiActionFilm';
import {
  getCurrentFilm,
  getFavoriteFilms,
} from '../../store/filmReducer/selector';

export const MyList = () => {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const currentFilm = useAppSelector(getCurrentFilm);

  const handleClick = useCallback(() => {
    const status = !currentFilm?.isFavorite;

    dispatch(
      setFavoriteFilmAction({
        filmId: Number(currentFilm?.id),
        status,
      })
    );
    dispatch(getFilmInfoAction(Number(currentFilm?.id)));
  }, [currentFilm?.id, currentFilm?.isFavorite, dispatch]);

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={handleClick}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={currentFilm?.isFavorite ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
};
