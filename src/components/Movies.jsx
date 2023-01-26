import { Card } from "@mui/material";
import React, { useState, useEffect } from "react";
import MoviePicture from "./MoviePicture.jsx";
import { Grid } from "@mui/material";

export default function Movies() {
  const [movies, setMovies] = useState([movies]);

  const API_KEY = "dcb4a6c3f8dfa2fa63b84227c13b3b75";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=thor`;

    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data);
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movies-container">
      {movies?.results?.map((movie) => {
        return (
          <div className="movies-item" key={movie.id}>
            <MoviePicture value={movie.poster_path} />
            <h2 className="movie-title">{movie.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
