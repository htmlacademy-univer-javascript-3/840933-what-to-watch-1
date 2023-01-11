import { FormEvent, useState, useCallback, ChangeEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { postCommentAction } from '../../api/apiActionFilm';
import { AppRoute } from '../../enums/route.enum';
import { getCurrentFilm } from '../../store/filmReducer/selector';

type StarProp = {
  currRating: number
}

export const ReviewForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentFilm = useAppSelector(getCurrentFilm);
  const [stars, setStars] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [errorText, setErrorText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const reviewValidationRules = useMemo(() => reviewText.length >= 50 && reviewText.length <= 400 && stars > 0, [stars, reviewText.length]);

  const onSubmit = useCallback((comment: string, rating: number) => {
    dispatch(
      postCommentAction({
        comment: comment,
        rating: rating,
        filmId: currentFilm?.id,
      })
    )
      .then(() => {
        setIsDisabled(false);
        navigate(`${AppRoute.FILM_ROUTE}/${currentFilm?.id}`);
      })
      .catch((err) => {
        setIsDisabled(false);
        setErrorText(err.message);
      });
  }, [currentFilm?.id, dispatch, navigate]);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setIsDisabled(true);
    if (reviewText && stars) {
      onSubmit(reviewText, stars);
    }
  }, [onSubmit, stars, reviewText]);

  const handleOnChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const currentText = event?.target?.value;
    setReviewText(currentText);
  }, []);

  const Star = ({ currRating }: StarProp) => (
    <>
      <input
        key={currRating + 1}
        className="rating__input"
        id={`star-${currRating + 1}`}
        type="radio"
        name="rating"
        value={currRating + 1}
        checked={stars === currRating + 1}
        onChange={() => {
          setStars(currRating + 1);
        }}
      />
      <label className="rating__label" htmlFor={`star-${currRating + 1}`}>
        Rating {currRating + 1}
      </label>
    </>);

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from(Array(10).keys())
            .reverse()
            .map((currRating) => (
              <Star key={currRating} currRating={currRating} />
            ))}
        </div>
      </div>
      <p>{errorText}</p>
      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={reviewText}
          onChange={handleOnChange}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={
              isDisabled || !reviewValidationRules
            }
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
