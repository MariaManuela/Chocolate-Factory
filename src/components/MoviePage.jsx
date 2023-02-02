import { useParams } from "react-router-dom";
import Movie from "./Movie.jsx";
import React, { useState, useEffect } from "react";
import MoviePicture from "./MoviePicture.jsx";
import * as Constans from "../constants/Constants.jsx";
import { Grid } from "@mui/material";

export default function MoviePage(props) {
  let { movieId } = useParams();

  console.log(props.posterPath);
  let posterPath = "";

  const [movies, setMovies] = useState([movies]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${Constans.API_KEY}`;

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
    <div className="movie-details-page-container">
      <div className="blue-movie-container">
        <div className="details-image">
          {movies?.posters
            ?.map((movie, id) => {
              id += 1;
              return (
                <MoviePicture
                  className="details-picture"
                  key={id}
                  posterPath={movie.file_path}
                />
              );
            })
            .slice(0, 1)}
        </div>
      </div>
    </div>
  );
}
