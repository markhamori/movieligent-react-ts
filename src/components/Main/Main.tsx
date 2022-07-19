import { useEffect, useState } from "react";

// Components
import { Spinner } from "../Spinner/Spinner";
import { MovieCard } from "../MovieCard/MovieCard";
import { Pagination } from "../Pagination/Pagination";
import { Favorites } from "../Favorites/Favorites";

// Images
import undrawIllustration from "../../assets/Undraw-illustration.svg";

// Styles
import "./Main.css";

// Types
import { MainProps, FavMovieDetailType } from "../../types/types";

const ls = localStorage.getItem("favorites");
const favoritesFromLs = ls !== null ? JSON.parse(ls) : [];

export const Main = ({
  pages,
  totalPages,
  selectPage,
  loading,
  movieDetails,
}: MainProps) => {
  const [favorite, setFavorite] =
    useState<FavMovieDetailType[]>(favoritesFromLs);

  const addToLs = (mov: FavMovieDetailType, id: number) => {
    if (favorite.length === 0) {
      setFavorite((prev) => [...prev, mov]);
    } else {
      favorite.map((el) => {
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
          />
        </>
      ) : (
        <p>Movie not found. Please try something else...</p>
      )}

      {totalPages === null ? (
        <div className="main__illustration">
          <img src={undrawIllustration} alt="undraw-co-illustration" />
        </div>
      ) : (
        ""
      )}

      <div className="content">
        {loading ? (
          <Spinner />
        ) : (
          movieDetails &&
          movieDetails.map((mov) => (
            <div
              className="movie"
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
