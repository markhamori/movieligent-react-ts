import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

// Styles
import "./App.css";

// Types
import { MovieDetailType } from "./types/types";

// Endpoints
import { searchByTitle } from "./config/Endpoints";

function App() {
  const [query, setQuery] = useState<string>("");
  const [pages, setPages] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [movieDetails, setMovieDetails] = useState<MovieDetailType[]>([]);
  const [favorites, setFavorites] = useState<[]>([]);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  const handleFetch = async () => {
    try {
      if (query) {
        setLoading(true);
        const { data } = await axios.get(searchByTitle(query, pages), {
          cancelToken: source.token,
        });
        setMovieDetails(data.results);
        setTotalPages(data.total_pages);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleFetch();
  }, [query, pages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setPages(1);
    if (value.length >= 3) setQuery(value);
    if (value.length === 0) setQuery("Star Wars");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setQuery(query);
    }
  };

  const searchButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setQuery(query);
  };

  const handleDblClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
  };

  const selectPage = (e: React.MouseEvent<HTMLButtonElement>) => {
    // let targetValue = Number(e.target);
    console.log(e.currentTarget);
    // if (targetValue !== 0) setPages(targetValue);
  };

  return (
    <div className="app">
      <Header
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        searchButton={searchButton}
      />
      <Main
        pages={pages}
        totalPages={totalPages}
        selectPage={selectPage}
        loading={loading}
        movieDetails={movieDetails}
        handleDblClick={handleDblClick}
      />
      <Footer />
    </div>
  );
}

export default App;
