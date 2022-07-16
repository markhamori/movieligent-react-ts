// Styles
import "./MovieCard.css";

// Icons
import { AiFillPoundCircle, AiOutlineClockCircle } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";

// Images
import NotFound from "../../assets/Not-found.png";

// Types
import { CardProps } from "../../types/types";

export const MovieCard = ({
  title,
  overview,
  posterPath,
  releaseDate,
}: CardProps) => {
  return (
    <>
      <div
        className="movie__card--details"
        style={{
          backgroundImage: `${
            posterPath === null
              ? `url("${NotFound}")`
              : `url("https://image.tmdb.org/t/p/original${posterPath}")`
          }`,
        }}
      >
        <div className="movie__card--overlay">
          <h3>{title}</h3>
          <p>({releaseDate.slice(0, 4)})</p>
        </div>
      </div>
    </>
  );
};
