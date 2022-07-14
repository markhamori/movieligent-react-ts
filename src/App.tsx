// Components
import { useState, useEffect, useContext } from "react";

// Components
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

// Data
import dummyData from "./dummyData.json";

// Types
import { MovieDetailType } from "./types/types"

function App() {
  const [movieDetails, setMovieDetails] = useState<MovieDetailType[]>([]);

  const getMovieDetails = () => {
    dummyData.results.map(res => {
      const { id, overview, poster_path, release_date, title } = res;

      const movieArray = {
        id,
        overview,
        poster_path,
        release_date,
        title
      }

      setMovieDetails(prev => [
        ...prev,
       movieArray
      ])
    });
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  return (
    <div className="app">
      <Header />
      <Main title={"Main"} movieDetails={movieDetails}/>
      <Footer />
    </div>
  );
}

export default App;
