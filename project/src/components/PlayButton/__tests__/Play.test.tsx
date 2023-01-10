import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { Play } from '../Play';

const initialEntries = ['/'];

describe('<Play />', () => {
  it('should render', () => {
    const view = render(
      <MemoryRouter initialEntries={initialEntries}>
        <Play filmId={5} />
      </MemoryRouter>
    );

    expect(view).toMatchSnapshot();
    expect(screen.getByTestId('film-card')).toHaveAttribute('href', '/player/5');
    expect(
      screen.getByText('Play')
    ).toBeInTheDocument();
  });
});
