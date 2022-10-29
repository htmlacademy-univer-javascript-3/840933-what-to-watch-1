import {ChangeEvent, useState} from 'react';

import {ReviewFormType} from '../../types/reviewForm';
import {MAX_RATING} from '../../constants/rating.const';
import {RatingStar} from '../RatingStar/RatingStar';

export const AddReviewForm = () => {
  const [formValue, setFormValue] = useState<ReviewFormType>({
    starsCount: 0,
    reviewText: ''
  });

  const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setFormValue((prevValue) => ({
      ...prevValue,
      reviewText: event.target.value
    }));
  };

  const handleStarsCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValue((prevState) => ({
      ...prevState,
      starsCount: Number(event.target.value)
    }));
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            [...Array(MAX_RATING).keys()].map((rating) =>
              <RatingStar key={rating} rating={rating} handleStarsCountChange={handleStarsCountChange} starsCount={formValue.starsCount} />)
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={formValue.reviewText} onChange={handleReviewTextChange}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};
