import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { FilmsList } from './FilmsList';

const initialEntries = ['/'];
const films = [{
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
}, {
  id: 2,
  name: 'Avatar',
  posterImage: '/img/poster',
  previewImage: '/preview/image',
  backgroundImage: 'background/image',
  backgroundColor: '#667',
  videoLink: 'https://video/123',
  previewVideoLink: 'https://preview/video/23',
  description: 'Best film with avatar',
  rating: 10,
  scoresCount: 12,
  director: 'James Cameron',
  starring: ['Arni'] as [string],
  runTime: 180,
  genre: 'comedy',
  released: 2009,
  isFavorite: true
}];

describe('<FilmsList />', () => {
  it('should render', () => {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <FilmsList
          films={films}
        />
      </MemoryRouter>
    );

    expect(screen.getByText('Terminator')).toBeInTheDocument();
    expect(screen.getByText('Avatar')).toBeInTheDocument();
  });
});
