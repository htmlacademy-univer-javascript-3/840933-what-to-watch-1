import {
  getFavoriteFilmsAction,
  getFilmCommentAction,
  getFilmInfoAction,
  getFilmSimilarAction,
  getPromoFilmAction,
  setFavoriteFilmAction,
} from '../../api/apiActionFilm';
import filmReducer from './film-reducer';
import { Film } from '../../types/film';
import { Review } from '../../types/review';

describe('Reducer: user', () => {
  it('should not change state when unknown action', () => {
    expect(filmReducer.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should get promo film', () => {
    const film = { id: 2, name: 'testFilm', isFavorite: true } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getPromoFilmAction.fulfilled.type,
        payload: film,
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: film,
      promoFilm: film,
    });
  });

  it('should not get promo film when rejected', () => {
    const film = { id: 2, name: 'testFilm', isFavorite: true } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getPromoFilmAction.rejected.type,
        payload: film,
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should get film info', () => {
    const film = {
      id: 2,
      name: 'testFilm',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getFilmInfoAction.fulfilled.type,
        payload: film,
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: film,
      promoFilm: null,
    });
  });

  it('should not get film info when rejected', () => {
    const film = {
      id: 2,
      name: 'testFilm',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getFilmInfoAction.rejected.type,
        payload: film,
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should update favorite films', () => {
    const film = {
      id: 2,
      name: 'testFilm',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getFavoriteFilmsAction.fulfilled.type,
        payload: [film],
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [film],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should not update favorite films when rejected', () => {
    const film = {
      id: 2,
      name: 'testFilm',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getFavoriteFilmsAction.rejected.type,
        payload: [film],
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should get comments', () => {
    const comment = { id: 1, comment: 'ok', rating: 5 } as Review;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getFilmCommentAction.fulfilled.type,
        payload: [comment],
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [comment],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should not update comments when rejected', () => {
    const comment = { id: 1, comment: 'ok', rating: 5 } as Review;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getFilmCommentAction.rejected.type,
        payload: [comment],
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should update similar films', () => {
    const film = {
      id: 2,
      name: 'testFilm',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getFilmSimilarAction.fulfilled.type,
        payload: [film],
      })
    ).toEqual({
      similarFilms: [film],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should not update similar films when rejected', () => {
    const film = {
      id: 2,
      name: 'testFilm',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    expect(
      filmReducer.reducer(state, {
        type: getFilmSimilarAction.rejected.type,
        payload: [film],
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should add to favorite films and update current film state', () => {
    const film1 = {
      id: 2,
      name: 'testFilm',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const film2 = {
      id: 3,
      name: 'testFilm2',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [film1],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    const current = filmReducer.reducer(state, {
      type: setFavoriteFilmAction.fulfilled.type,
      payload: film2,
    });
    expect(current).toEqual({
      similarFilms: [],
      favoriteFilms: [film1, film2],
      reviews: [],
      currentFilm: film2,
      promoFilm: null,
    });
  });

  it('should remove from favorite films and update current film state', () => {
    const film1 = {
      id: 2,
      name: 'testFilm',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const film2 = {
      id: 3,
      name: 'testFilm2',
      isFavorite: false,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const state = {
      similarFilms: [],
      favoriteFilms: [film1, film2],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    const current = filmReducer.reducer(state, {
      type: setFavoriteFilmAction.fulfilled.type,
      payload: film2,
    });
    expect(current).toEqual({
      similarFilms: [],
      favoriteFilms: [film1],
      reviews: [],
      currentFilm: film2,
      promoFilm: null,
    });
  });
});
