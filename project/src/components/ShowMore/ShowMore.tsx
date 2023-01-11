import { Dispatch, SetStateAction } from 'react';

import { VISIBLE_FILMS } from '../../constants';

type ShowMoreProps = {
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>;
};

export const ShowMore = ({ setVisibleFilmsCount }: ShowMoreProps) => (
  <div className="catalog__more">
    <button
      className="catalog__button"
      type="button"
      onClick={() => setVisibleFilmsCount((prev) => prev + VISIBLE_FILMS)}
    >
      Show more
    </button>
  </div>
);
