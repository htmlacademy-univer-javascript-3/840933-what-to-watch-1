import {useAppSelector} from '../../hooks';
import {getCurrentFilm} from '../../store/film-reducer/selector';

function FilmInfo() {
  const currentFilm = useAppSelector(getCurrentFilm);
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{currentFilm?.rating}</div>
        <p className="film-rating__meta">
          {currentFilm?.rating ?
            <span className="film-rating__level">{getStringRating(currentFilm?.rating)}</span> : null}

          <span className="film-rating__count">{currentFilm?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{currentFilm?.description}</p>

        <p className="film-card__director"><strong>Director: {currentFilm?.director}</strong></p>

        <p className="film-card__starring">
          <strong>Starring: {currentFilm?.starring.join(', ').concat(' and other')}
          </strong>
        </p>
      </div>
    </>
  );
}

function getStringRating(rating: number) {
  if (rating < 3) {
    return 'Bad';
  }
  if (rating < 5) {
    return 'Normal';
  }
  if (rating < 7) {
    return 'Good';
  }
  if (rating < 9) {
    return 'Very good';
  }
  return 'Awesome';
}

export default FilmInfo;
