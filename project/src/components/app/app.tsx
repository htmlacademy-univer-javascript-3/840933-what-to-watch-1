import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {AppRoute} from '../../constants/AppRoute.const';
import {FILM_LIMIT} from '../../constants/FilmLimit.const';
import {AuthorizationStatus} from '../../constants/AuthStatus.const';
import {PrivateRoute} from '../../privateRoute/privateRoute';
import {MainPage} from '../../pages/Main';
import {MyList} from '../../pages/MyList';
import {SignIn} from '../../pages/SignIn';
import {NotFound} from '../../pages/NotFound';
import {films, promoFilm} from '../../mocks/films';
import {MoviePage} from '../../pages/MoviePage';
import {AddReview} from '../../pages/AddReview';
import {Player} from '../../pages/Player';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage promoFilm={promoFilm} films={films} limit={FILM_LIMIT}/>}/>
        <Route path={AppRoute.SignIn} element={<SignIn/>}/>
        <Route path={AppRoute.Film} element={<MoviePage />}/>
        <Route path={AppRoute.MyList} element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <MyList {...films}/>
          </PrivateRoute>
        }
        />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.NotFound} element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
