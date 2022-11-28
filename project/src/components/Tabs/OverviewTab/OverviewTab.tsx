import { IFilm } from '../../../types/film.type';
import { getRatingCategoryByRating } from '../../../utils/getRatingCategory';

export const OverviewTab = ({ director, actors, description, rating, scoresCount }: IFilm) => (
  <>
    <div className="film-rating">
      <div className="film-rating__score">{rating}</div>
      <p className="film-rating__meta">
        <span className="film-rating__level">{getRatingCategoryByRating(rating)}</span>
        <span className="film-rating__count">{scoresCount}</span>
      </p>
    </div>

    <div className="film-card__text">
      <p>{description}</p>
      <p className="film-card__director"><strong>Director: {director}</strong></p>
      <p className="film-card__starring"><strong>Starring: {actors.join(', ')} and other</strong></p>
    </div>
  </>
);

