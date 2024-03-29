export type MovieDetailType = {
  id: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  title: string;
  favorite: boolean;
};

export type HeaderProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type MainProps = {
  pages: number;
  totalPages: number | null;
  selectPage: React.MouseEventHandler<HTMLButtonElement>;
  prevPage: React.MouseEventHandler<HTMLButtonElement>;
  nextPage: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  movieDetails: MovieDetailType[];
};

export type CardProps = {
  title: string;
  overview: string;
  releaseDate: string;
  posterPath: string | null;
  favorite: boolean;
};

export type PaginationProps = {
  pages: number;
  totalPages: number | null;
  selectPage: React.MouseEventHandler<HTMLButtonElement>;
  prevPage: React.MouseEventHandler<HTMLButtonElement>;
  nextPage: React.MouseEventHandler<HTMLButtonElement>;
};

export type FavoriteProps = {
  favorite: MovieDetailType[];
  setFavorite: React.Dispatch<React.SetStateAction<MovieDetailType[]>>;
};
