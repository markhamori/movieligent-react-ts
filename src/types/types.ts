export type MovieDetailType = {
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
};

export type HeaderProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  searchButton: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type MainProps = {
  pages: number;
  totalPages: number | null;
  selectPage: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  movieDetails: MovieDetailType[];
  handleDblClick: React.MouseEventHandler<HTMLDivElement>;
};

export type CardProps = {
  title: string;
  overview: string;
  releaseDate: string;
  posterPath: string;
};
