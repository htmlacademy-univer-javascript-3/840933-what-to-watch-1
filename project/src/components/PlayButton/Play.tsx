import { Link } from 'react-router-dom';

import { AppRoute } from '../../enums/route.enum';

class PlayProps {
  filmId: number | undefined;
}

export function Play({ filmId }: PlayProps) {
  return (
    <Link
      className="btn btn--play film-card__button"
      to={`${AppRoute.PLAYER_ROUTE}/${filmId}`}
      data-testid="film-card"
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s" />
      </svg>
      <span>
        Play
      </span>
    </Link>
  );
}
