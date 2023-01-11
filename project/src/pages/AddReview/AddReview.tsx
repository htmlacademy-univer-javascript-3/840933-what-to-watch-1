import { Link } from 'react-router-dom';

import { Logo } from '../../components/Logo/Logo';
import { UserBlock } from '../../components/UserBlock/UserBlock';
import { ReviewForm } from '../../components/ReviewForm/ReviewForm';
import { useAppSelector } from '../../hooks';
import { getCurrentFilm } from '../../store/filmReducer/selector';
import { AppRoute } from '../../enums/route.enum';

export const AddReview = () => {
  const currentFilm = useAppSelector(getCurrentFilm);

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={currentFilm?.backgroundImage} alt={currentFilm?.name} />
        </div>
        <header className="page-header">
          <Logo light={false} />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link
                  to={`${AppRoute.FILM_ROUTE}/${currentFilm?.id}`}
                  className="breadcrumbs__link"
                >
                  {currentFilm?.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <Link
                  to={`${AppRoute.FILM_ROUTE}/${currentFilm?.id}/review`}
                  className="breadcrumbs__link"
                >
                  Add review
                </Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img
            src={currentFilm?.posterImage}
            alt={currentFilm?.name}
            width="218"
            height="327"
          />
        </div>
      </div>
      <div className="add-review">
        <ReviewForm />
      </div>
    </section>
  );
};
