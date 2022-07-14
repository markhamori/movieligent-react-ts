import { useEffect } from "react";

// Styles
import "./Main.css";

// Types
import { MovieDetailType } from "../../types/types"

type MainProp = {
  title: string,
  movieDetails: MovieDetailType[]
}

export const Main= ({ title, movieDetails }: MainProp) => {
  useEffect(() => {
    console.log(movieDetails);
  }, [])
  
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
      <div>
        Content

      </div>
     <div>
      Spinner
     </div>
    </div>
  );
};
