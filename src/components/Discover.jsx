import React, { useState, useEffect, useContext } from "react";
import * as Constans from "../constants/Constants.jsx";
import Movie from "./Movie.jsx";
import { RoutingContext } from "../routing/Routing.js";
import { useDispatch } from "react-redux";
import {
  displayMovieDetails,
  setWelcomePageBanner,
} from "../redux/actions/movieActions";
import { Grid } from "@mui/material";
import Trailer from "./Trailer.jsx";
import DiscoverTrailers from "./DiscoverTrailers.jsx";

export default function Discover() {
  const [movies, setMovies] = useState([]);
  const { setPage } = useContext(RoutingContext);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${Constans.API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data);
            dispatch(displayMovieDetails(data.results));
            dispatch(setWelcomePageBanner(data.results));
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginTop: "10px",
      }}
    >
      <Grid
        sx={{
          width: "80%",
          overflow: "auto",
          scrollBehavior: "smooth",
          display: "inline-flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          height: "45vh",
        }}
      >
        {movies?.results?.map((movie) => {
          return (
            <Movie
              key={movie.id}
              movie={movie}
              backgroundImg={movie.poster_path}
              chip
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
