import { useState } from "react";

// Components
import { Spinner } from "../Spinner/Spinner";
import { MovieCard } from "../MovieCard/MovieCard";
import { Pagination } from "../Pagination/Pagination";
import { Favorites } from "../Favorites/Favorites";

// Styles
import "./Main.css";

// Types
import { MainProps, FavMovieDetailType } from "../../types/types";

export const Main = ({
  pages,
  totalPages,
  selectPage,
  loading,
  movieDetails,
}: MainProps) => {
  const [favorite, setFavorite] = useState<FavMovieDetailType[]>([]);

  const addToLs = (mov: FavMovieDetailType) => {
    setFavorite((prev) => [...prev, mov]);
    if (favorite) localStorage.setItem("favorites", JSON.stringify(favorite));
  };

  return (
    <div className="main">
      <Favorites favorite={favorite} setFavorite={setFavorite} />

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
            <div
              key={mov.id}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                addToLs(mov)
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
