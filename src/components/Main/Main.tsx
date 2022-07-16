// Components
import { Spinner } from "../Spinner/Spinner";
import { MovieCard } from "../MovieCard/MovieCard";
import { Favorites } from "../Favorites/Favorites";
import { Pagination } from "../Pagination/Pagination";

// Styles
import "./Main.css";

// Types
import { MainProps } from "../../types/types";

export const Main = ({
  pages,
  totalPages,
  selectPage,
  loading,
  movieDetails,
}: MainProps) => {
  return (
    <div className="main">
      <div className="main__title">
        <h2>Start typing in the search field.</h2>
        <Favorites />
      </div>
      {totalPages !== 0 ? (
        <Pagination
          pages={pages}
          totalPages={totalPages}
          selectPage={selectPage}
        />
      ) : (
        <p>Movie not found. Please try something else...</p>
      )}

      <div className="main__body">
        {loading ? (
          <Spinner />
        ) : (
          movieDetails &&
          movieDetails.map((mov) => (
            <MovieCard
              key={mov.id}
              title={mov.title}
              overview={mov.overview}
              releaseDate={mov.release_date}
              posterPath={mov.poster_path}
            />
          ))
        )}
      </div>
    </div>
  );
};
