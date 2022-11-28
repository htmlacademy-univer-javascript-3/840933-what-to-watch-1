import { FilmRatingCategory } from '../types/ratingCategory.type';

const filmCategoryToRatingMap = {
  [FilmRatingCategory.BAD]: [1, 2],
  [FilmRatingCategory.NORMAL]: [3, 4],
  [FilmRatingCategory.GOOD]: [5, 6, 7],
  [FilmRatingCategory.VERY_GOOD]: [8, 9]
};

const ratingMapToFilmCategory: Record<number, string> = {};

for (const [category, ratingList] of Object.entries(filmCategoryToRatingMap)) {
  for (const i of ratingList) {
    ratingMapToFilmCategory[i] = category;
  }
}

export function getRatingCategoryByRating(rating: number): FilmRatingCategory {
  return ratingMapToFilmCategory[rating] as FilmRatingCategory ?? FilmRatingCategory.AWESOME;
}
