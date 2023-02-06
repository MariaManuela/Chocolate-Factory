import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import HeartButton from "./HeartButton.jsx";
import MoviePicture from "./MoviePicture.jsx";

export default function MovieDetailsContainer({ posterPath, id }) {
  return (
    <Grid
      sx={{
        background: "rgb(48 116 236 / 10%)",
        boxShadow: "0px 4px 20px 5px rgba(30, 60, 110, 0.53) inset",
        padding: "20px",
        width: "100%",
        height: "550px",
        position: "relative",
        overflow: "hidden",
        margin: "0",
        display: "flex",
        justifyContent: "center",
        objectFit: "contain",
        height: "100%",
        width: "100%",
      }}
    >
      <Container sx={{ display: "flex" }}>
        <Grid>
          <MoviePicture
            className="display-image"
            key={id}
            posterPath={posterPath}
          />
        </Grid>
        <Grid
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "flex-start",
            margin: "30px",
            alignItems: "center",
          }}
        >
          <HeartButton className="heart-button" />
        </Grid>
      </Container>
    </Grid>
  );
}
