import { Grid, Grow, Typography } from "@mui/material";
import { blue, red, yellow } from "@mui/material/colors";
import { Container } from "@mui/system";
import React from "react";
import HeartButton from "./HeartButton.jsx";
import MoviePicture from "./MoviePicture.jsx";
import ScoreChip from "./ScoreChip.jsx";
import { useSelector } from "react-redux";

export default function MovieDetailsContainer({ posterPath, id, voteAverage }) {
  const backgroundImage = useSelector((state) => {
    return state.moviesReducer.movieBackgroundPicture.movieBackgroundSrc;
  });

  return (
    <Grid
      sx={{
        background: "rgb(48 116 236 / 10%)",
        //boxShadow: "0px 4px 20px 5px rgba(30, 60, 110, 0.53) inset",
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
        //backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat, no-repeat, repeat-x",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "right 20% bottom 70%",
        //background: `linear-gradient(to top, #adb6c4, #9907facc), url(${backgroundImage}) no-repeat top center`,
        background: `linear-gradient(to bottom,rgb(58 59 72 / 90%), rgb(11 7 38)), url(${backgroundImage})`,
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
