// Components
import { Spinner } from "../Spinner/Spinner";
import { MovieCard } from "../MovieCard/MovieCard";

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
  handleDblClick,
}: MainProps) => {
  return (
    <div className="main">
      <div className="main__title">
        <h2>Start searching from hundreds of movies...</h2>
      </div>
      <div className="pagination">
        {totalPages &&
          [...Array(totalPages)].map((e, i) => (
            <button
              onClick={(e): React.MouseEventHandler<HTMLButtonElement> =>
                selectPage
              }
              value={i}
              key={i}
            >
              {i}
            </button>
          ))}
      </div>

      <div className="movie">
        {loading ? (
          <Spinner />
        ) : (
          movieDetails &&
          movieDetails.map((mov) => (
            <div
              className="movie__card"
              onDoubleClick={(e): React.MouseEventHandler<HTMLDivElement> =>
                handleDblClick
              }
            >
              <MovieCard
                title={mov.title}
                overview={mov.overview}
                releaseDate={mov.release_date}
                posterPath={mov.poster_path}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
