import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import { App } from '../app';
import { ALL_GENRES } from '../../../constants';
import { AuthorizationStatus } from '../../../enums/auth.enum';
import { createMockFilms } from '../../../utils/film.util';
import { AppRoute } from '../../../enums/route.enum';

const mockStore = configureMockStore();
const mockFilms = createMockFilms(2);

const store = mockStore({
  user: { authorizationStatus: AuthorizationStatus.Auth },
  data: { films: mockFilms, isDataLoaded: true },
  films: {
    reviews: [],
    similarFilms: [],
    currentFilm: mockFilms[0],
    favoriteFilms: [],
    promoFilm: mockFilms[0],
  },
  genre: { currentGenre: ALL_GENRES },
});

describe('<App />', () => {
  it('/', () => {
    const view = render((
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.MAIN_ROUTE]}>
          <App />
        </MemoryRouter>
      </Provider>
    ));

    expect(view).toMatchSnapshot();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('/mylist', () => {
    const view = render((
      <Provider store={store}>
        <MemoryRouter initialEntries={[AppRoute.MYLIST_ROUTE]}>
          <App />
        </MemoryRouter>
      </Provider>
    ));

    expect(view).toMatchSnapshot();
    expect(screen.getByText('My list')).toBeInTheDocument();
  });

  it('unknown router', () => {
    const view = render((
      <Provider store={store}>
        <MemoryRouter initialEntries={['/helloworld']}>
          <App />
        </MemoryRouter>
      </Provider>
    ));

    expect(view).toMatchSnapshot();
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });
});
