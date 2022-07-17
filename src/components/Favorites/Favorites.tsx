import { useState, useEffect } from "react";

// Componnents
import { MovieCard } from "../MovieCard/MovieCard";

// Types
import { FavMovieDetailType, FavoriteProps } from "../../types/types";

// Icons
import { BsHeartFill } from "react-icons/bs"

// Styles
import "./Favorites.css"

export const Favorites = ({ favorite, setFavorite }:FavoriteProps) => {
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const removeFromLs = (id: number) => {
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
  }, [setFavorite]);

  return (
    <div className="favorites">
      <div className="favorites__header">
       <button
          className="favorites__button"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            setShowFavorites(!showFavorites)
          }
        >
          <BsHeartFill/>
          <span>{favorite.length === null ? "0" : favorite.length}</span>
        </button>
      </div>
      
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
            {favorite.length === 0 ? <p>Empty</p> : ""}
            {favorite &&
              favorite.map((fav) => (
                <div
                  key={fav.id}
                  onClick={(e: React.MouseEvent<HTMLDivElement>) =>
                    removeFromLs(fav.id)
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
  )
}
