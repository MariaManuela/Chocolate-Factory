import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import * as Constans from "../../constants/Constants.jsx";
import Movie from "../Movie.jsx";

export default function Discover() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${Constans.API_KEY}`;

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
    <div className="discover-movie-part">
      <div
        className="discover-movies-container"
        style={{ width: "80%", overflow: "auto", scrollBehavior: "smooth" }}
      >
        {movies?.results?.map((movie) => {
          return <Movie movie={movie} chip />;
        })}
      </div>
    </div>
  );
}
