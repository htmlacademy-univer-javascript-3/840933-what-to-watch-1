import { dataReducer } from '../dataReducer';
import { getFilmsAction } from '../../../api/apiActionFilm';

describe('Test dataReducer', () => {
  it('should get films and change status', () => {
    const state = { films: [], isLoaded: false };
    const film = { id: 2, name: 'testFilm', isFavorite: true };

    expect(
      dataReducer.reducer(state, {
        type: getFilmsAction.fulfilled,
        payload: [film],
      })
    ).toEqual({ films: [film], isLoaded: true });
  });

  it('should not change state when pending status', () => {
    const state = { films: [], isLoaded: false };
    expect(
      dataReducer.reducer(state, { type: getFilmsAction.pending })
    ).toEqual({ films: [], isLoaded: false });
  });
});
