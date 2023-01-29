import React, { useState, useEffect } from "react";
import MoviePicture from "./MoviePicture.jsx";
import * as Constans from "../constants/Constants.jsx";

export default function Movies() {
  const [movies, setMovies] = useState([movies]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${Constans.API_KEY}&query=thor`;

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
            <MoviePicture className="movie-photo" test="s" />
            <h2 className="movie-title">{movie.title}</h2>
          </div>
        );
      })}
    </div>
  );
}
