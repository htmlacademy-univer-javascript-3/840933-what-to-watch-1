import { ChangeEvent, useState } from 'react';

export const AddReviewForm = () => {
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);

  const onTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };

  const onRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value));
  };

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from(Array(10).keys()).map((currentRating) => (
              <span key={currentRating}>
                <input className="rating__input" id={`radio-${currentRating + 1}`} type="radio"
                  name="rating" value={currentRating + 1} checked={rating === currentRating + 1} onChange={onRatingChange}
                />
                <label className="rating__label" htmlFor={`radio-${currentRating + 1}`}>
                  Rating {rating + 1}
                </label>
              </span>
            ))
          }
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={reviewText} onChange={onTextChange}/>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
};
