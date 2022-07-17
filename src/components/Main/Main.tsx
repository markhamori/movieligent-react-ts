import { useState, useEffect } from "react";

// Components
import { Spinner } from "../Spinner/Spinner";
import { MovieCard } from "../MovieCard/MovieCard";
import { Pagination } from "../Pagination/Pagination";

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
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const pushIntoFavorites = (mov: FavMovieDetailType) => {
    setFavorite((prev) => [...prev, mov]);
    if (favorite) localStorage.setItem("favorites", JSON.stringify(favorite));
  };

  const removeFromFavorites = (id: number) => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      const parseSaved = JSON.parse(saved);
      const filtered = parseSaved.filter(
        (el: FavMovieDetailType) => el.id !== id
      );
      localStorage.clear();
      setFavorite(filtered);
      localStorage.setItem("favorites", JSON.stringify(filtered));
    }

    return null;
  };

  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      const parseSaved = JSON.parse(saved);
      setFavorite(parseSaved);
    }
  }, []);

  return (
    <div className="main">
      <div className="favorites">
        <button
          className="favorites__button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setShowFavorites(!showFavorites)
          }
        >
          Favorites
          <span>({favorite.length === null ? "0" : favorite.length})</span>
        </button>

        {showFavorites && (
          <>
            <div className="favorites__title">
              <h2>STORED FAVORITE MOVIE/MOVIES</h2>
              <p>
                Click the movie to{" "}
                <span style={{ color: "#ef473a" }}>remove.</span>
              </p>
            </div>
            <div className="favorites__body">
              {favorite &&
                favorite.map((fav) => (
                  <div
                    key={fav.id}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                      removeFromFavorites(fav.id)
                    }
                  >
                    <MovieCard
                      title={fav.title}
                      overview={fav.overview}
                      releaseDate={fav.release_date}
                      posterPath={fav.poster_path}
                    />
                  </div>
                ))}
            </div>
          </>
        )}
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
            <div
              key={mov.id}
              onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                pushIntoFavorites(mov)
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
