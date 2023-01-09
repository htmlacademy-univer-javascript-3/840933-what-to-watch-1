import {changeGenre, genreReducer} from './genre-reducer';
import {ALL_GENRES} from '../../constants';

describe('Reducer: genre', () => {
  it('should not change state when unknown action', () => {
    expect(genreReducer.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({currentGenre:ALL_GENRES});
  });

  it('should change genre', () => {
    const state = {currentGenre: ALL_GENRES};
    expect(genreReducer.reducer(state, {type: changeGenre, payload:'comedy'}))
      .toEqual({currentGenre: 'comedy'});
  });
});
