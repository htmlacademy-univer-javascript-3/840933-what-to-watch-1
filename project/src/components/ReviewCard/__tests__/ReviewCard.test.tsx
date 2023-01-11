import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';

import { ReviewCard } from '../ReviewCard';

const initialEntries = ['/'];
const comment = {
  id: 1,
  rating: 10,
  comment: 'ФИЛЬМ АГОНЬ!!!',
  date: '2022-12-31',
  user: { id: 1, name: 'vladik' },
};

describe('<NotFoundScreen />', () => {
  it('should render', () => {
    const view = render(
      <MemoryRouter initialEntries={initialEntries}>
        <ReviewCard
          {...comment}
        />
      </MemoryRouter>
    );

    expect(view).toMatchSnapshot();
    expect(screen.getByText('December 31, 2022')).toBeInTheDocument();
    expect(screen.getByText('ФИЛЬМ АГОНЬ!!!')).toBeInTheDocument();
    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getByText('vladik')).toBeInTheDocument();
  });
});
