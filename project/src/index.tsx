import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkLoginAction} from './api/apiActionUser';
import {getFavoriteFilmsAction, getFilmsAction, getPromoFilmAction} from './api/apiActionFilm';
import {BrowserRouter} from 'react-router-dom';

store.dispatch(checkLoginAction()).then(() => {
  store.dispatch(getFilmsAction());
  store.dispatch(getPromoFilmAction());
  store.dispatch(getFavoriteFilmsAction());
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
