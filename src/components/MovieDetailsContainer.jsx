import { Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { Container } from "@mui/system";
import React from "react";
import HeartButton from "./HeartButton.jsx";
import MoviePicture from "./MoviePicture.jsx";
import ScoreChip from "./ScoreChip.jsx";
import { Box } from "@mui/material";

export default function MovieDetailsContainer({ posterPath, id, voteAverage }) {
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
            position: "relative",
          }}
        >
          <ScoreChip
            position="relative"
            className="score-chip-details"
            style={{ height: "80px", width: "80px" }}
            value={voteAverage}
          />
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            sx={{
              color: "#fff",
              fontFamily: "gill sans, sans-serif",
              fontSize: "14px",
              fontWeight: "bolder",
              lineHeight: "60px",
              textTransform: "uppercase",
              textAlign: "center",
              letterSpacing: "-1px",
              textShadow: "0 0 1px #001b2e, 1px 2px 1px #001b2e",
              position: "absolute",
              left: "85px",
            }}
          >
            Vote average
          </Typography>
          <HeartButton className="heart-button" />
        </Grid>
      </Container>
    </Grid>
  );
}
