import { useParams } from "react-router-dom";
import Movie from "./Movie.jsx";
import React, { useState, useEffect } from "react";
import MoviePicture from "./MoviePicture.jsx";
import * as Constans from "../constants/Constants.jsx";
import { Button, Grid, IconButton } from "@mui/material";
import HeartButton from "./HeartButton.jsx";
import ScoreChip from "./ScoreChip.jsx";
import { Box } from "@mui/material";
import MovieDetailsContainer from "./MovieDetailsContainer.jsx";

export default function MoviePage(props) {
  let { movieId } = useParams();
  const [movies, setMovies] = useState([movies]);

  let iso = "";

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${Constans.API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            for (let isoData of data.posters) {
              if (isoData.iso_639_1 === "en") {
                iso = isoData.iso_639_1;
              }
            }
            setMovies(data);
            // setMovies(data);
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {
        movies?.posters
          ?.filter((poster) => poster.iso_639_1 === "en")
          ?.map((movie, id) => {
            id += 1;
            return (
              <MovieDetailsContainer key={id} posterPath={movie.file_path} />
            );
          })[0]
      }
    </>
  );
}
