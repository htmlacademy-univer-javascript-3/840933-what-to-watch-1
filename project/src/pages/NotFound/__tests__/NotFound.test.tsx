import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { NotFound } from '../NotFound';

const initialEntries = ['/'];

describe('<NotFound />', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <NotFound />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Not Found')
    ).toBeInTheDocument();
  });
});
