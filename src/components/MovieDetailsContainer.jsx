import { Grid } from "@mui/material";
import React from "react";
import HeartButton from "./HeartButton.jsx";
import MoviePicture from "./MoviePicture.jsx";

export default function MovieDetailsContainer({ posterPath, id }) {
  return (
    <>
      <MoviePicture
        className="details-picture"
        key={id}
        posterPath={posterPath}
      />
      <Grid>
        <HeartButton />
      </Grid>
    </>
  );
}
