import "./MovieCard.css";

// Icons
import { AiOutlineClockCircle } from "react-icons/ai";

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
      <div className="movie__card--shadow" />
      <div
        className="movie__card--details"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${posterPath}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div className="movie__card--overlay">
            <h3>
              {title} <span>({releaseDate.slice(0, 4)})</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
