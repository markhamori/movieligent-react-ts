import React, { useState, useEffect } from "react";

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
      {title} component
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
      <button onClick={(e: React.MouseEvent<HTMLButtonElement> | undefined) => setLoading(!loading)}>Press</button> <br/>
      --------------------
    </div>
  );
};
