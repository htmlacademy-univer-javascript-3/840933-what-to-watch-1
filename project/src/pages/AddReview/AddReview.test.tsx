import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';

import { AuthorizationStatus } from '../../enums/auth.enum';
import { ALL_GENRES } from '../../constants';
import { AddReview } from './AddReview';
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

describe('<AddReviewForm />', () => {
  it('should render', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <AddReview />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText('Post')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Sign out')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Add review')
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole('navigation')
    ).not.toEqual([]);
  });
});
