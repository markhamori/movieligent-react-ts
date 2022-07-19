import { useEffect, useState } from "react";

// Components
import { Spinner } from "../Spinner/Spinner";
import { MovieCard } from "../MovieCard/MovieCard";
import { Pagination } from "../Pagination/Pagination";
import { Favorites } from "../Favorites/Favorites";

// Images
import popcornIllustration from "../../assets/Popcorn-illustration.svg";

// Styles
import "./Main.css";

// Types
import { MainProps, MovieDetailType } from "../../types/types";

const ls = localStorage.getItem("favorites");
const favoritesFromLs = ls !== null ? JSON.parse(ls) : [];

export const Main = ({
  pages,
  totalPages,
  selectPage,
  prevPage,
  nextPage,
  loading,
  movieDetails,
}: MainProps) => {
  const [favorite, setFavorite] = useState<MovieDetailType[]>(favoritesFromLs);

  const addToLs = (mov: MovieDetailType, id: number) => {
    if (favorite.length === 0) {
      setFavorite((prev) => [...prev, mov]);
    } else {
      favorite.forEach((el) => {
        if (el.id === id) {
          alert("Already in the local storage.");
          throw new Error("Already in the local storage.");
        }
      });
      setFavorite((prev) => [...prev, mov]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div className="main">
      <Favorites favorite={favorite} setFavorite={setFavorite} />

      {totalPages !== 0 ? (
        <>
          <Pagination
            pages={pages}
            totalPages={totalPages}
            selectPage={selectPage}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        </>
      ) : (
        <div className="main__not-found">
          <p>Movie not found. Please try something else...</p>
        </div>
      )}

      {totalPages === null ? (
        <div className="main__illustration">
          <img src={popcornIllustration} alt="popcorn-illustration" />
        </div>
      ) : (
        ""
      )}

      <div className="main__content">
        {loading ? (
          <Spinner />
        ) : (
          movieDetails &&
          movieDetails.map((mov) => (
            <div
              className="main__movie"
              data-testid="test-main-movie"
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
                favorite={false}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
