import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { Footer } from './Footer';

const initialEntries = ['/'];

describe('<Footer />', () => {
  it('should render', () => {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Footer />
      </MemoryRouter>
    );

    expect(
      screen.getByText('© 2023 What to watch Ltd.')
    ).toBeInTheDocument();
  });
});
