export const searchByTitle = (
  title: string | undefined,
  page: number = 1
): string => {
  return `https://api.themoviedb.org/3/search/movie?api_key=950b7b8326de24d91bf1589a0795880b&language=en-US&query=${title}&page=${page}`;
};
