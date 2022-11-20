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

  const renderTabs = () => {
    switch (activeTab) {
      case Tab.DETAILS:
        return <DetailsTab {...film} />;
      case Tab.REVIEWS:
        return <ReviewsTab {...reviews} />;
      default:
        return <OverviewTab {...film} />;
    }
  };

  const tabOnClickHandler = (tab: Tab) => () => setActiveTab(tab);

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
              onClick={tabOnClickHandler(Tab.OVERVIEW)}
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
              onClick={tabOnClickHandler(Tab.DETAILS)}
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
              onClick={tabOnClickHandler(Tab.REVIEWS)}
            >
              Reviews
            </span>
          </li>
        </ul>
      </nav>
      {renderTabs()}
    </div>
  );
};
