import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import App from './app';
import { ALL_GENRES, AuthorizationStatus } from '../../constants';
import { createMockFilms } from '../../utils/film.util';

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

const initialEntries = ['/'];

const fakeApp = (
  <Provider store={store}>
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    render(fakeApp);
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText(`${ALL_GENRES}`)).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
