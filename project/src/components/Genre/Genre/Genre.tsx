import React from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch } from '../../../hooks';
import { changeGenre } from '../../../store/actions';
import { IGenre } from './genre.type';

export const Genre = ({ genre, isActive }: IGenre) => {
  const dispatch = useAppDispatch();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(changeGenre({
      genre: genre
    }));
  };

  return (
    <li className={`catalog__genres-item ${isActive ? ' catalog__genres-item--active' : ''}`}>
      <NavLink to="/" className='catalog__genres-link' onClick={handleLinkClick}>
        {genre}
      </NavLink>
    </li>
  );
};
