import { Grid } from "@mui/material";
import React from "react";
import MoviePicture from "./MoviePicture.jsx";
import ScoreChip from "./first_page/ScoreChip.jsx";

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
        />
        {chip && <ScoreChip value={movie.vote_average} />}
      </Grid>
      <h2 className="discover-movie-title">{movie.title}</h2>
      <h2 className="vote-average">{movie.vote_average}</h2>
      <h2 className="vote-count">{movie.vote_count}</h2>
    </Grid>
  );
}
