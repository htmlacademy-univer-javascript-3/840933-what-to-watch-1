import {IRatingStar} from '../../types/ratingStar.type';

export const RatingStar = ({ rating, handleStarsCountChange, starsCount }: IRatingStar) => (
  <span>
    <input className="rating__input" id={`star-${rating + 1}`} type="radio" name="rating"
      value={rating + 1} checked={starsCount === rating + 1} onChange={handleStarsCountChange}
    />
    <label className="rating__label" htmlFor={`star-${rating + 1}`}>
      Rating {rating + 1}
    </label>
  </span>
);
