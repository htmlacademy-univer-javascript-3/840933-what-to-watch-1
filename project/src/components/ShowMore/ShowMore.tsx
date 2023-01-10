import { Dispatch, SetStateAction } from 'react';

import { VISIBLE_FILMS_COUNT } from '../../constants';

type ShowMoreProps = {
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>;
};

export const ShowMoreButton = ({ setVisibleFilmsCount }: ShowMoreProps) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={() => setVisibleFilmsCount((prev) => prev + VISIBLE_FILMS_COUNT)}
    >
      Show more
    </button>
  </div>
);
