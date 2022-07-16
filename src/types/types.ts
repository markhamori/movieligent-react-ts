export type MovieDetailType = {
  id: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  title: string;
};

export type HeaderProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleKeyPress: React.KeyboardEventHandler<HTMLInputElement>;
  searchButton: React.MouseEventHandler<HTMLButtonElement>;
};

export type MainProps = {
  pages: number;
  totalPages: number | null;
  selectPage: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  movieDetails: MovieDetailType[];
};

export type CardProps = {
  title: string;
  overview: string;
  releaseDate: string;
  posterPath: string | null;
};

export type PaginationProps = {
  pages: number;
  totalPages: number | null;
  selectPage: React.MouseEventHandler<HTMLButtonElement>;
};
