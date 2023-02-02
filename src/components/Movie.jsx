import { Grid } from "@mui/material";
import React from "react";
import MoviePicture from "./MoviePicture.jsx";
import ScoreChip from "./ScoreChip.jsx";
import { Link } from "react-router-dom";
import MovieDescription from "./MovieDescription.jsx";

export default function Movie({ movie, chip }) {
  return (
    <Grid sx={{ paddingRight: "10px" }} className="movies-item" key={movie.id}>
      <Grid
        className="progress-container"
        sx={{
          position: "relative",
        }}
      >
        <MoviePicture
          className="discover-movie-photo"
          posterPath={movie.poster_path}
          movieId={movie.id}
        />
        {chip && <ScoreChip value={movie.vote_average} />}
      </Grid>
      <MovieDescription value={movie.title} />
      {/* <h2 className="vote-count">{movie.vote_count}</h2> */}
    </Grid>
  );
}
