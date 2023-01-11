import { FilmDetails } from './filmDetails';
import { FilmReviews } from './filmReviews';
import { FilmInfo } from './filmInfo';
import { ActiveTab } from '../../enums/tab.enum';

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
