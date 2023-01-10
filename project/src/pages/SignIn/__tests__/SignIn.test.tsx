import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { SignIn } from '../SignIn';

const initialEntries = ['/'];

describe('<NotFound />', () => {
  it('should render', () => {
    const view = render(
      <MemoryRouter initialEntries={initialEntries}>
        <SignIn />
      </MemoryRouter>
    );

    expect(view).toMatchSnapshot();

    expect(
      screen.getByText('Not Found')
    ).toBeInTheDocument();
  });
});
