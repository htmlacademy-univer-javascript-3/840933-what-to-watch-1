import { format } from 'date-fns';

import { IReview } from '../../types/review.type';

export const ReviewCard = ({ date, comment, rating, user: { name } }: IReview) => {
  const reviewDate = new Date(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}
        </p>
        <footer className="review__details">
          <cite className="review__author">
            {name}
          </cite>
          <time className="review__date" dateTime={format(reviewDate, 'yyyy-MM-dd')}>{format(reviewDate, 'MMMM dd, yyyy')}</time>
        </footer>
      </blockquote>
      <div className="review__rating">
        {rating}
      </div>
    </div>
  );
};
