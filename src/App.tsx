import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

// Styles
import "./App.css";

// Types
import { MovieDetailType } from "./types/types";

// Endpoints
import { searchByTitleAndPage } from "./config/Endpoints";

function App() {
  const [query, setQuery] = useState<string>("");
  const [pages, setPages] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [movieDetails, setMovieDetails] = useState<MovieDetailType[]>([]);

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const handleFetch = async () => {
      try {
        if (query && query !== "") {
          setLoading(true);
          const { data } = await axios.get(searchByTitleAndPage(query, pages), {
            cancelToken: source.token,
          });
          setMovieDetails(data.results);
          if (data.total_pages >= 12) {
            setTotalPages(12);
          } else {
            setTotalPages(data.total_pages);
          }
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }
      } catch (err) {
        console.error(err);
      }
    };
    handleFetch();
  }, [query, pages]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setPages(1);
    if (value.length >= 3) setQuery(value);
    if (value.length === 0) setQuery("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.currentTarget.value;
      setQuery(value);
    }
  };

  const selectPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let targetValue = Number(e.currentTarget.value);
    setPages(targetValue);
  };

  const prevPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (pages && pages > 1) setPages(pages - 1);
  };

  const nextPage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (totalPages === null) return;
    if (pages && pages < 12 && pages < totalPages) setPages(pages + 1);
  };

  return (
    <div className="app">
      <Header
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        setQuery={setQuery}
      />
      <Main
        pages={pages}
        totalPages={totalPages}
        selectPage={selectPage}
        prevPage={prevPage}
        nextPage={nextPage}
        loading={loading}
        movieDetails={movieDetails}
      />
    </div>
  );
}

export default App;
