import { useEffect, useState } from "react";
import dummyData from "../../dummyData.json";

import "./Main.css";

export const Main = () => {
  const [movies, setMovies] = useState<String[] | undefined>([]);

  const fetchDummyData = () => {
    return dummyData.results.map((res) => setMovies([res.original_title]));
  };

  useEffect(() => {
    fetchDummyData();
  }, []);

  return (
    <div>
      <p>Main</p>
      <button role="alert">Alert</button>
      {movies && movies.map((movie) => <p>{movie}</p>)}
    </div>
  );
};
