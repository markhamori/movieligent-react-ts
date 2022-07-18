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
  let arr:object[] = [];

  const addToLs = (mov: FavMovieDetailType, id: number) => {
    if(favorite.length === 0) {
      setFavorite(prev => [...prev, mov]);
      arr.push(mov);
      localStorage.setItem("favorites", JSON.stringify(arr));
    } else {
      // Check the clicked movie is not already in the localstorge
      favorite.map(el => {
        if(el.id === id) throw new Error("Already in the local storage.")
      });
      setFavorite(prev => [...prev, mov]);
      arr.push(mov)
      console.log(arr);
      console.log(favorite);
      localStorage.setItem("favorites", JSON.stringify(arr));
    }
  };
  // Check which item already added to the favorites. Show filled heart these

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
                addToLs(mov, mov.id)
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
