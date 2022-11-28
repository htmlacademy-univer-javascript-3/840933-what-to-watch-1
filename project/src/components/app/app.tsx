import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AppRoute } from '../../constants/route.const';
import { FILM_LIMIT } from '../../constants/film.const';
import { AuthorizationStatus } from '../../constants/auth.const';
import { PrivateRoute } from '../../privateRoute/privateRoute';
import { MainPage } from '../../pages/Main';
import { MyList } from '../../pages/MyList';
import { SignIn } from '../../pages/SignIn';
import { NotFound } from '../../pages/NotFound';
import { mockFilms, promoFilm } from '../../mocks/films.mock';
import { FilmPage } from '../../pages/FilmPage';
import { AddReview } from '../../pages/AddReview';
import { Player } from '../../pages/Player';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.Main}
        element={
          <MainPage promoFilm={promoFilm} limit={FILM_LIMIT} />
        }
      />
      <Route path={AppRoute.SignIn} element={<SignIn />} />
      <Route path={AppRoute.Film} element={<FilmPage {...mockFilms.slice(0, 3)} />} />
      <Route
        path={AppRoute.MyList}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.AddReview} element={<AddReview />} />
      <Route path={AppRoute.Player} element={<Player />} />
      <Route path={AppRoute.NotFound} element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
