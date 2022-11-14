export const genreArray = [
  'comedy',
  'documentary',
  'drama',
  'horror',
  'family',
  'romance',
  'scifi',
  'thriller'
];

type GenreTuple = typeof genreArray;
export type Genre = GenreTuple[number];
