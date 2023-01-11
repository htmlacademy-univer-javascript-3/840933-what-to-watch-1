import { changeGenre, genreReducer } from '../genre.reducer';
import { ALL_GENRES } from '../../../constants';

describe('genreReducer', () => {
  it('should change genre', () => {
    const state = { currentGenre: ALL_GENRES };

    expect(
      genreReducer.reducer(state, { type: changeGenre, payload: 'comedy' })
    ).toEqual({ currentGenre: 'comedy' });
  });

  it('should not change genre if unknown reducer type', () => {
    const state = { currentGenre: ALL_GENRES };

    expect(
      genreReducer.reducer(state, { type: '22', payload: 'comedy' })
    ).toEqual({ currentGenre: ALL_GENRES });
  });
});
