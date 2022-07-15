import { useRef } from "react";

// Components
import { Spinner } from "../Spinner/Spinner";
import { MovieCard } from "../MovieCard/MovieCard"

// Styles
import "./Main.css";

// Types
import { MainProps } from "../../types/types";

export const Main = ({pages, totalPages, selectPage, loading, movieDetails, handleDblClick}: MainProps) => {

    return (
    <div className="main">
      <div>
        <p>Current page: {pages}</p>
        {totalPages &&
          [...Array(totalPages)].map((e, i) => (
            <button onClick={(e):React.MouseEventHandler<HTMLButtonElement> => selectPage} value={i} key={i}>
              {i}
            </button>
          ))}
      </div>

      <div>
        {loading ? (
          <Spinner />
        ) : (
          movieDetails &&
          movieDetails.map((mov) => (
            <div onDoubleClick={(e):React.MouseEventHandler<HTMLDivElement> => handleDblClick}>
              <MovieCard title={mov.title} overview={mov.overview} releaseDate={mov.release_date}/>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
