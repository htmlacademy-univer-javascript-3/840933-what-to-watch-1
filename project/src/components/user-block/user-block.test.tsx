import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

import { UserBlock } from './user-block';
import { AuthorizationStatus } from '../../constants';

describe('Component: UserBlock', () => {
  it('should render sign out when auth', () => {
    const initialEntries = ['/'];
    const mockStore = configureMockStore();
    const store = mockStore({
      user: { authorizationStatus: AuthorizationStatus.Auth },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render sign in when no auth', () => {
    const initialEntries = ['/'];
    const mockStore = configureMockStore();
    const store = mockStore({
      user: { authorizationStatus: AuthorizationStatus.NoAuth },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
