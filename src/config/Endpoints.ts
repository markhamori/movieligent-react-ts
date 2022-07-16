export const searchByTitle = (
  title: string | undefined,
  page: number = 1
): string => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}&language=en-US&query=${title}&page=${page}`;
};
