import {useAppSelector} from '../../hooks';
import {getCurrentFilm} from '../../store/film-reducer/selector';

function FilmDetails() {
  const currentFilm = useAppSelector(getCurrentFilm);
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{currentFilm?.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value"> {currentFilm?.starring.join('\r')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span
            className="film-card__details-value"
          >{currentFilm?.runTime ? getStringTime(currentFilm?.runTime) : ''}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{currentFilm?.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{currentFilm?.released}</span>
        </p>
      </div>
    </div>
  );
}

function getStringTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  if (hours > 0) {
    return `${hours} h ${minutes} m`;
  } else {
    return `${minutes} m`;
  }
}

export default FilmDetails;
