import { Dispatch, MouseEvent, SetStateAction, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '../../hooks';
import { VISIBLE_FILMS } from '../../constants';
import { changeGenre } from '../../store/genreReducer/genre.reducer';
import { AppRoute } from '../../enums/route.enum';

type GenresProps = {
  name: string;
  isActive: boolean;
  setVisibleFilmsCount: Dispatch<SetStateAction<number>>;
};

export const Genre = ({ name, isActive, setVisibleFilmsCount }: GenresProps) => {
  const dispatch = useAppDispatch();
  const handleLinkClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      dispatch(changeGenre(name));
      setVisibleFilmsCount(VISIBLE_FILMS);
    },
    [dispatch, name, setVisibleFilmsCount]
  );

  return (
    <li
      className={
        isActive
          ? 'catalog__genres-item catalog__genres-item--active'
          : 'catalog__genres-item'
      }
    >
      <Link
        to={AppRoute.MAIN_ROUTE}
        className="catalog__genres-link"
        onClick={handleLinkClick}
      >
        {name}
      </Link>
    </li>
  );
};
