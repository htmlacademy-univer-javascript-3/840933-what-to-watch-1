import { dataReducer } from './data-reducer';
import { getFilmsAction } from '../../api/apiActionFilm';

describe('Reducer: data', () => {
  it('should not change state when unknown action', () => {
    const state = { films: [], isDataLoaded: false };
    expect(dataReducer.reducer(state, { type: 'UNKNOWN_ACTION' })).toEqual({
      films: [],
      isDataLoaded: false,
    });
  });

  it('should not change state when pending status', () => {
    const state = { films: [], isDataLoaded: false };
    expect(
      dataReducer.reducer(state, { type: getFilmsAction.pending })
    ).toEqual({ films: [], isDataLoaded: false });
  });

  it('should get films and change status', () => {
    const state = { films: [], isDataLoaded: false };
    const film = { id: 2, name: 'testFilm', isFavorite: true };

    expect(
      dataReducer.reducer(state, {
        type: getFilmsAction.fulfilled,
        payload: [film],
      })
    ).toEqual({ films: [film], isDataLoaded: true });
  });
});
