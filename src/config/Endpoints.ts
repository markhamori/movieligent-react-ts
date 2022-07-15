export const searchByTitle = (
  title: string | undefined,
  page: number = 1
): string => {
  return `https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query=${title}&page=${page}`;
};

// return `https://api.themoviedb.org/3/search/movie?api_key=${process.env.THE_MOVIE_DB_API_KEY}&language=en-US&query=${title}&page=${page}`;
