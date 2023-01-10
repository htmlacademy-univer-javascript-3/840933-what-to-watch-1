import { changeGenre, genreReducer } from '../genreReducer';
import { ALL_GENRES } from '../../../constants';

describe('Reducer: genre', () => {
  it('should change genre', () => {
    const state = { currentGenre: ALL_GENRES };
    expect(
      genreReducer.reducer(state, { type: changeGenre, payload: 'comedy' })
    ).toEqual({ currentGenre: 'comedy' });
  });
});
