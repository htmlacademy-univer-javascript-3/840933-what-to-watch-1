import FilmDetails from './film-details';
import FilmReviews from './film-reviews';
import FilmInfo from './film-info';
import { ActiveTab } from '../../consts/tab.enum';

type TabsProps = {
  activeTab: ActiveTab;
};

export const Tabs = ({ activeTab }: TabsProps) => {
  switch (activeTab) {
    case ActiveTab.Overview:
      return <FilmInfo />;

    case ActiveTab.Review:
      return <FilmReviews />;

    case ActiveTab.Details:
      return <FilmDetails />;

    default:
      return <p>Not active tab :(</p>;
  }
};
