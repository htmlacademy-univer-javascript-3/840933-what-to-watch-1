import { FilmDetails } from './FilmDetails';
import { FilmReviews } from './FilmReviews';
import { FilmInfo } from './FilmInfo';
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
      return (
        <p>
          Not active tab :(
        </p>
      );
  }
};
