import { Route, Routes } from 'react-router-dom';

import { MyList } from '../../pages/MyList/MyList';
import { Movie } from '../../pages/Movie/Movie';
import { AddReview } from '../../pages/AddReview/AddReview';
import { Player } from '../../pages/Player/Player';
import { NotFound } from '../../pages/NotFound/NotFound';
import { PrivateRoute } from './privateRoute';
import { Main } from '../../pages/main/main';
import { useAppSelector } from '../../hooks';
import { getIsDataLoaded } from '../../store/dataReducer/selector';
import { AuthorizationStatus } from '../../enums/auth.enum';
import { SignIn } from '../../pages/SignIn/SignIn';
import { AppRoute } from '../../enums/route.enum';
import { Spinner } from '../Spinner/Spinner';

export const App = () => {
  const isLoaded = useAppSelector(getIsDataLoaded);

  if (!isLoaded) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/login"
        element={
          <PrivateRoute
            status={AuthorizationStatus.NoAuth}
            destinationPage={<SignIn />}
            redirectUrl={AppRoute.MAIN_ROUTE}
          />
        }
      />
      <Route
        path="/mylist"
        element={
          <PrivateRoute
            status={AuthorizationStatus.Auth}
            destinationPage={<MyList />}
            redirectUrl={AppRoute.LOGIN_ROUTE}
          />
        }
      />
      <Route path="/films/:id" element={<Movie />} />
      <Route
        path="/films/:id/review"
        element={
          <PrivateRoute
            status={AuthorizationStatus.Auth}
            destinationPage={<AddReview />}
            redirectUrl={AppRoute.LOGIN_ROUTE}
          />
        }
      />
      <Route path="/player/:id" element={<Player />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
