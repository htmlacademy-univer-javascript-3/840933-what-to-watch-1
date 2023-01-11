import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { NotFound } from '../NotFound';
import { createMockFilms } from '../../../utils/film.util';
import { AuthorizationStatus } from '../../../enums/auth.enum';
import { ALL_GENRES } from '../../../constants';
import { Provider } from 'react-redux';

const initialEntries = ['/'];
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

describe('<NotFound />', () => {
  it('should render', () => {
    const view = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <NotFound />
        </MemoryRouter>
      </Provider>
    );

    expect(view).toMatchSnapshot();

    expect(
      screen.getByText('Not Found')
    ).toBeInTheDocument();
  });
});
