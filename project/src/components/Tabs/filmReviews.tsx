import { useAppSelector } from '../../hooks';
import { getReviews } from '../../store/filmReducer/selector';
import { ReviewCard } from '../ReviewCard/ReviewCard';

export const FilmReviews = () => {
  const reviews = useAppSelector(getReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            comment={review?.comment}
            user={review?.user}
            date={review?.date}
            rating={review?.rating}
            id={review.id}
          />
        ))}
      </div>
    </div>
  );
};
