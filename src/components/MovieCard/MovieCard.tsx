import "./MovieCard.css";

// Types
import { CardProps } from "../../types/types"

export const MovieCard = ({title, overview, releaseDate}: CardProps) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{overview}</p>
    </>
  );
};
