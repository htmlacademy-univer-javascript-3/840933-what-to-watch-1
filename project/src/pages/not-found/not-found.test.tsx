import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { NotFound } from './not-found';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const initialEntries = ['/'];

    render(
      <MemoryRouter initialEntries={initialEntries}>
        <NotFound />
      </MemoryRouter>
    );

    const headerElement = screen.getByText('404 Page Not Found');
    const linkElement = screen.getByText('Main page');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
