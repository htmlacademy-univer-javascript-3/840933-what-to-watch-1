import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

import { AuthorizationStatus } from '../../enums/auth.enum';
import { ALL_GENRES } from '../../constants';
import { ReviewForm } from './ReviewForm';
import { createMockFilms } from '../../utils/film.util';

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

describe('<ReviewForm />', () => {
  it('should render', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <ReviewForm />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText('Post')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox')
    ).toBeInTheDocument();
  });
});
