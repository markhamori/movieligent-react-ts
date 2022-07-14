import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

// Components
import { Spinner } from "../Spinner/Spinner";
import { MovieCard } from "../MovieCard/MovieCard"

// Styles
import "./Main.css";

// Types
import { MovieDetailType } from "../../types/types";

// Endpoints
import { searchByTitle } from "../../config/Endpoints";

export const Main = () => {
  const [query, setQuery] = useState<string>("");
  const [pages, setPages] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [movieDetails, setMovieDetails] = useState<MovieDetailType[]>([]);
  const [favorites, setFavorites] = useState<[]>([]);

  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

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

  const handleFetch = async () => {
    try {
      if (query) {
        setLoading(true);
        const { data } = await axios.get(searchByTitle(query, pages), {
          cancelToken: source.token,
        });
        setMovieDetails(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDblClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target);
  };

  const selectPage = (e: any) => {
    let targetValue = Number(e.target.value);
    if (targetValue !== 0) setPages(targetValue);
  };

  useEffect(() => {
    handleFetch();
  }, [query, pages]);

  return (
    <div className="main">
      <div className="main__input">
        <input
          type="text"
          name="search"
          placeholder="Search a movie..."
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchButton}>
          <FiSearch />
        </button>
      </div>

      <div>
        <p>Current page: {pages}</p>
        {totalPages &&
          [...Array(totalPages)].map((e, i) => (
            <button onClick={selectPage} value={i} key={i}>
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
            <div onDoubleClick={handleDblClick}>
              <MovieCard title={mov.title} overview={mov.overview} releaseDate={mov.release_date}/>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
