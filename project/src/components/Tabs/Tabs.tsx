import { useState } from 'react';

import { OverviewTab } from './OverviewTab/OverviewTab';
import { DetailsTab } from './DetailsTab/DetailsTab';
import { ReviewsTab } from './ReviewTab/ReviewsTab';

import { REVIEW_LIST } from '../../mocks/review.mock';
import { Tab } from '../../constants/review.const';
import { IFilm } from '../../types/film.type';

export const Tabs = (film: IFilm) => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.OVERVIEW);
  const reviews = REVIEW_LIST;

  const handleTabClick = (tab: Tab) => () => setActiveTab(tab);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={`film-nav__item ${
              activeTab === Tab.OVERVIEW ? 'film-nav__item--active' : ''
            }`}
          >
            <span
              className="film-nav__link"
              onClick={handleTabClick(Tab.OVERVIEW)}
            >
              Overview
            </span>
          </li>
          <li
            className={`film-nav__item ${
              activeTab === Tab.DETAILS ? 'film-nav__item--active' : ''
            }`}
          >
            <span
              className="film-nav__link"
              onClick={handleTabClick(Tab.DETAILS)}
            >
              Details
            </span>
          </li>
          <li
            className={`film-nav__item ${
              activeTab === Tab.REVIEWS ? 'film-nav__item--active' : ''
            }`}
          >
            <span
              className="film-nav__link"
              onClick={handleTabClick(Tab.REVIEWS)}
            >
              Reviews
            </span>
          </li>
        </ul>
      </nav>
      {activeTab === Tab.REVIEWS && <ReviewsTab {...reviews} />}
      {activeTab === Tab.OVERVIEW && <OverviewTab {...film} />}
      {activeTab === Tab.DETAILS && <DetailsTab {...film} />}
    </div>
  );
};
