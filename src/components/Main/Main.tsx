import { useState, useEffect } from "react";

// Styles
import "./Main.css";

// Types
import { MovieDetailType } from "../../types/types"

type MainProp = {
  title: string,
  movieDetails: MovieDetailType[]
}

export const Main= ({ title, movieDetails }: MainProp) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div>
      {title}
      <div>
        Favorites
      </div>
      <div>
        <input type="text" name="search" placeholder="Search for a movie..."/>
        <button>Search</button>
      </div>
      {loading ? "Loading..." : ( 
        <div>
          <div>
            {movieDetails.map(mov => (
              <p>{mov.title}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
