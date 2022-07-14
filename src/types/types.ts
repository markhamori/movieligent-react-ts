export type MovieDetailType = {
  id: number;
  overview: string;
  poster_path: string | null;
  release_date: string;
  title: string;
};

export type MainProp = {
  movieDetails: MovieDetailType[];
};

export type CardProps = {
  title: string,
  overview: string,
  releaseDate: string
}