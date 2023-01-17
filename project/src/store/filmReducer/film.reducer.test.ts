import {
  getFavoriteFilmsAction,
  getFilmCommentAction,
  getFilmInfoAction,
  getFilmSimilarAction,
  getPromoFilmAction,
  setFavoriteFilmAction,
} from '../../api/apiActionFilm';
import { filmReducer } from './film.reducer';
import { Film } from '../../types/film.type';

describe('filmReducer', () => {
  it('should get film info when status fulfilled', () => {
    const mockFilm = {
      id: 1,
      name: 'kisik',
      isFavorite: true,
      rating: 1,
      genre: 'comedy',
    };
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
        payload: mockFilm,
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: mockFilm,
      promoFilm: null,
    });
  });

  it('should get promo film when status fulfilled', () => {
    const mockFilm = { id: 1, name: 'kisik', isFavorite: true };
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
        payload: mockFilm,
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: mockFilm,
      promoFilm: mockFilm,
    });
  });

  it('should not get promo film when status rejected', () => {
    const mockFilm = { id: 2, name: 'kisik', isFavorite: true };
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
        payload: mockFilm,
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should not get film info when status rejected', () => {
    const mockFilm = {
      id: 1,
      name: 'kisik',
      isFavorite: false,
      rating: 8,
      genre: 'comedy',
    };
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
        payload: mockFilm,
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
    const mockFilm = {
      id: 1,
      name: 'kisik',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    };
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
        payload: [mockFilm],
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [mockFilm],
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
    };
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

  it('should get comments when status fulfilled', () => {
    const comment = { id: 1, comment: 'fire ❤️‍🔥', rating: 10 };
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

  it('should not update comments when status rejected', () => {
    const comment = { id: 1, comment: 'fire ❤️‍🔥', rating: 10 };
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

  it('should update similar films when status fulfilled', () => {
    const mockFilm = {
      id: 1,
      name: 'kisik',
      isFavorite: true,
      rating: 7,
      genre: 'drama',
    };
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
        payload: [mockFilm],
      })
    ).toEqual({
      similarFilms: [mockFilm],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should not update similar films when status rejected', () => {
    const mockFilm = {
      id: 1,
      name: 'vladik',
      isFavorite: true,
      rating: 4,
      genre: 'action',
    };
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
        payload: [mockFilm],
      })
    ).toEqual({
      similarFilms: [],
      favoriteFilms: [],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    });
  });

  it('should add to favorite films and update current film', () => {
    const firstMockFilm = {
      id: 2,
      name: 'testFilm',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;
    const secondMockFilm = {
      id: 3,
      name: 'testFilm2',
      isFavorite: true,
      rating: 4,
      genre: 'comedy',
    } as Film;

    const state = {
      similarFilms: [],
      favoriteFilms: [firstMockFilm],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    const current = filmReducer.reducer(state, {
      type: setFavoriteFilmAction.fulfilled.type,
      payload: secondMockFilm,
    });

    expect(current).toEqual({
      similarFilms: [],
      favoriteFilms: [firstMockFilm, secondMockFilm],
      reviews: [],
      currentFilm: secondMockFilm,
      promoFilm: null,
    });
  });

  it('should remove favorite films and update current film', () => {
    const firstMockFilm = {
      id: 1,
      name: 'kisik',
      isFavorite: true,
      rating: 10,
      genre: 'comedy',
    } as Film;
    const secondMockFilm = {
      id: 2,
      name: 'vladik',
      isFavorite: false,
      rating: 9,
      genre: 'comedy',
    } as Film;

    const state = {
      similarFilms: [],
      favoriteFilms: [firstMockFilm, secondMockFilm],
      reviews: [],
      currentFilm: null,
      promoFilm: null,
    };
    const current = filmReducer.reducer(state, {
      type: setFavoriteFilmAction.fulfilled.type,
      payload: secondMockFilm,
    });

    expect(current).toEqual({
      similarFilms: [],
      favoriteFilms: [firstMockFilm],
      reviews: [],
      currentFilm: secondMockFilm,
      promoFilm: null,
    });
  });
});
