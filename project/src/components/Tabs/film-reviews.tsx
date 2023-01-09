import {useAppSelector} from '../../hooks';
import {getReviews} from '../../store/film-reducer/selector';
import ReviewCard from '../review-card/review-card';

function FilmReviews() {
  const reviews = useAppSelector(getReviews);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) =>
          (
            <ReviewCard key={review.id} comment={review?.comment} user={review?.user} date={review?.date}
              rating={review?.rating}
              id={review.id}
            />
          )
        )}
      </div>
    </div>
  );
}

export default FilmReviews;
