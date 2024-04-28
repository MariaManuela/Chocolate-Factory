import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Grid } from "@mui/joy";
import * as Constans from "../constants/Constants.jsx";
import Movie from "./Movie.jsx";

export default function DiscoverTopRated() {
  const [populars, setPopulars] = useState([populars]);
  let { movieId } = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${Constans.API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setPopulars(data);
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
        }}
      >
        {populars?.results?.map((movie) => {
          return (
            <Movie
              key={movie.id}
              movie={movie}
              backgroundImg={movie.poster_path}
              chip
            />
          );
        })}
        ;
      </Grid>
    </Grid>
  );
}
