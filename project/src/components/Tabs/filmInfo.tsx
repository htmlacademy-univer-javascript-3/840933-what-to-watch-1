import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/filmReducer/selector';
import { getStringRating } from '../../utils/rating.util';

export const FilmInfo = () => {
  const currentFilm = useAppSelector(getCurrentFilm);
  const rating = Number.isInteger(currentFilm?.rating) ? `${currentFilm?.rating}.0` : `${currentFilm?.rating}`;

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {rating}
        </div>
        <p className="film-rating__meta">
          {currentFilm?.rating &&
            <span className="film-rating__level">
              {getStringRating(currentFilm?.rating)}
            </span>}
          <span className="film-rating__count">
            {currentFilm?.scoresCount} ratings
          </span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{currentFilm?.description}</p>
        <p className="film-card__director">
          <strong>Director: {currentFilm?.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {currentFilm?.starring.join(', ').concat(' and other')}
          </strong>
        </p>
      </div>
    </>
  );
};
