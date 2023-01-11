enum FilmRating {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome'
}

export const getStringRating = (rating: number): FilmRating => {
  if (rating < 3) {
    return FilmRating.Bad;
  }

  if (rating < 5) {
    return FilmRating.Normal;
  }

  if (rating < 7) {
    return FilmRating.Good;
  }

  if (rating < 9) {
    return FilmRating.VeryGood;
  }

  return FilmRating.Awesome;
};
