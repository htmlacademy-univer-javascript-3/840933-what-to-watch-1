export function createMockFilms(count: number) {
  const films = [];
  for (let i = 0; i < count; i++) {
    films.push({
      id: i + 1,
      genre: 'comedy',
      name: `testFilm${i + 1}`,
      isFavorite: true,
    });
  }
  return films;
}
