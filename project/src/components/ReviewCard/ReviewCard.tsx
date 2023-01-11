import { useMemo } from 'react';
import moment from 'moment';

import { Review } from '../../types/review.type';

export const ReviewCard = ({ comment, user, date, rating }: Review) => {
  const formatDate = useMemo(
    () => moment(date).format('MMMM DD, YYYY'),
    [date]
  );

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>
            {formatDate}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">
        {rating}
      </div>
    </div>
  );
};
