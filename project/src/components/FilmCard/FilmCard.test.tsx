import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { FilmCard } from './FilmCard';

const initialEntries = ['/'];

const mockFilm = {
  id: 1,
  name: 'Terminator',
  posterImage: '/img/poster',
  previewImage: '/preview/image',
  backgroundImage: 'background/image',
  backgroundColor: '#666',
  videoLink: 'https://video/122',
  previewVideoLink: 'https://preview/video/22',
  description: 'Best film with robot',
  rating: 10,
  scoresCount: 22,
  director: 'James Cameron',
  starring: ['Arni'] as [string],
  runTime: 98,
  genre: 'comedy',
  released: 1999,
  isFavorite: true
};

describe('<FilmCard />', () => {
  it('should render', async () => {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <FilmCard film={mockFilm} onMouseOver={() => mockFilm} />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Terminator')
    ).toBeInTheDocument();
    expect(await screen.findAllByTestId('video')).not.toEqual([]);
  });
});
