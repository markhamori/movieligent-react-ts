import { useState, useEffect } from "react";

// Components
import { Spinner } from "../Spinner/Spinner";
import { MovieCard } from "../MovieCard/MovieCard";
import { Favorites } from "../Favorites/Favorites";
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

  const favoriteArray: FavMovieDetailType[] = [];

  const pushIntoFavorites = (mov: FavMovieDetailType) => {
    favoriteArray.push(mov);
    console.log(favoriteArray);
  };

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

      <div>
        {favoriteArray &&
          favoriteArray.map((fav) => (
            <>
              <h1>{fav.title}</h1>
              <p>{fav.overview}</p>
            </>
          ))}
      </div>

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
