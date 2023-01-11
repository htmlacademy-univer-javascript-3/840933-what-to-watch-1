import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import '@testing-library/jest-dom/extend-expect';

import { UserBlock } from '../UserBlock';
import { AuthorizationStatus } from '../../../enums/auth.enum';

const initialEntries = ['/'];
const mockStore = configureMockStore();

describe('<UserBlock />', () => {
  it('should render sign out when user has auth status', () => {
    const store = mockStore({
      user: { authorizationStatus: AuthorizationStatus.Auth },
    });

    const view = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock />
        </MemoryRouter>
      </Provider>
    );

    expect(view).toMatchSnapshot();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

  it('should render sign in when user has no auth status', () => {
    const store = mockStore({
      user: { authorizationStatus: AuthorizationStatus.NoAuth },
    });

    const view = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={initialEntries}>
          <UserBlock />
        </MemoryRouter>
      </Provider>
    );

    expect(view).toMatchSnapshot();
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });
});
