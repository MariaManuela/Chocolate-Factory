import { Grid } from "@mui/material";
import React from "react";
import MoviePicture from "./MoviePicture.jsx";
import ScoreChip from "./ScoreChip.jsx";
import { Link } from "react-router-dom";
import MovieDescription from "./MovieDescription.jsx";
import Button from "@mui/material/Button";

export default function Movie({ movie, chip, backgroundImg }) {
  return (
    <Grid sx={{ paddingRight: "10px" }} className="movies-item" key={movie.id}>
      <Grid
        sx={{
          position: "relative",
          display: "flex",
          marginTop: "10px",
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
              //className="discover-movie-photo"
              sx={{
                height: "250px",
                borderRadius: "5px",
                boxShadow:
                  "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px," +
                  "rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              }}
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
