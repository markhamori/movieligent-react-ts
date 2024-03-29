// Styles
import "./MovieCard.css";

// Icons
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// Images
import NotFound from "../../assets/Not-found.png";

// Types
import { CardProps } from "../../types/types";

export const MovieCard = ({
  title,
  overview,
  posterPath,
  releaseDate,
  favorite,
}: CardProps) => {
  return (
    <div className="movie__card">
      <div
        className="movie__card--overlay"
        style={{
          backgroundImage: `${
            posterPath === null
              ? `url("${NotFound}")`
              : `url("https://image.tmdb.org/t/p/original${posterPath}")`
          }`,
        }}
      >
        <div className="movie__card--fav-icon">
          {favorite === true ? <AiFillHeart /> : <AiOutlineHeart />}
        </div>
        <div className="movie__card--details">
          <h3>{title}</h3>
          {releaseDate !== undefined ? (
            <p>({releaseDate.slice(0, 4)})</p>
          ) :  <p>XXXX</p>}
        </div>
      </div>
    </div>
  );
};
