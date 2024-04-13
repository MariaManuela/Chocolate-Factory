import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as Constans from "../constants/Constants.jsx";
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
              <MovieDetailsContainer
                key={id}
                movieId={movieId}
                posterPath={movie.file_path}
                voteAverage={movie.vote_average}
              />
            );
          })[0]
      }
    </>
  );
}
