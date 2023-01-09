import { Route, Routes } from 'react-router-dom';
import { MyList } from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import { NotFound } from '../../pages/not-found/not-found';
import PrivateRoute from './private-route';
import Main from '../../pages/main/main';
import LoadingPage from '../../pages/loading-page/loading-page';
import { useAppSelector } from '../../hooks';
import { getIsDataLoaded } from '../../store/data-reducer/selector';
import { AuthorizationStatus } from '../../constants';
import SignIn from '../../pages/sign-in/sign-in';
import { AppRoute } from '../../consts/route.enum';

function App(): JSX.Element {
  const isDataLoaded = useAppSelector(getIsDataLoaded);

  if (!isDataLoaded) {
    return <LoadingPage />;
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
      <Route path="/films/:id" element={<MoviePage />} />
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
}

export default App;
