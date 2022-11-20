import { IReview } from '../../../types/review.type';
import { ReviewCard } from '../../ReviewCard/ReviewCard';

export const ReviewsTab = (reviews: IReview[]) => (
  <div className="film-card__reviews film-card__row">
    {
      Array.from(Array(Math.ceil(Object.values(reviews).length / 3)).keys()).map((i) => (
        <div key={i} className="film-card__reviews-col">
          {
            Object.values(reviews).slice(i * 3, i * 3 + 3).map(
              (review) => <ReviewCard key={review.id} {...review} />
            )
          }
        </div>
      ))
    }
  </div>
);

