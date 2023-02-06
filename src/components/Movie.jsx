import { Grid } from "@mui/material";
import React from "react";
import MoviePicture from "./MoviePicture.jsx";
import ScoreChip from "./ScoreChip.jsx";
import { Link } from "react-router-dom";
import MovieDescription from "./MovieDescription.jsx";
import Button from "@mui/material/Button";

export default function Movie({ movie, chip }) {
  return (
    <Grid sx={{ paddingRight: "10px" }} className="movies-item" key={movie.id}>
      <Grid
        className="progress-container"
        sx={{
          position: "relative",
        }}
      >
        <Button
          variant="text"
          sx={{
            backgroundColor: "transparent",
            padding: "0px",
            "& .css-8tpde2-MuiButtonBase-root-MuiButton-root": {
              color: "transparent",
              padding: "0px 0px",
            },
          }}
        >
          <Link to={`movie/${movie.id}`}>
            <MoviePicture
              className="discover-movie-photo"
              posterPath={movie.poster_path}
              movieId={movie.id}
            />
            {chip && (
              <ScoreChip
                top="-10px"
                right="-10px"
                position="absolute"
                value={movie.vote_average}
              />
            )}
          </Link>
        </Button>
      </Grid>
      <MovieDescription value={movie.title} />
    </Grid>
  );
}
