import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import HeartButton from "./HeartButton.jsx";
import MoviePicture from "./MoviePicture.jsx";
import ScoreChip from "./ScoreChip.jsx";
import { useSelector } from "react-redux";
import Cast from "./Cast.jsx";

export default function MovieDetailsContainer({
  posterPath,
  id,
  voteAverage,
  movieId,
}) {
  let title = "";
  let description = "";
  const backgroundImage = useSelector((state) => {
    return state.moviesReducer.movieBackgroundPicture.movieBackgroundSrc;
  });

  useSelector((state) => {
    state.moviesReducer.movieDetails.movieData.map((elem) => {
      if (elem.id == movieId) {
        title = elem.title;
        description = elem.overview;
      }
    });
  });

  console.log(title);
  return (
    <>
      <Grid
        sx={{
          background: "rgb(48 116 236 / 10%)",
          padding: "20px",
          width: "100%",
          height: "550px",
          position: "relative",
          overflow: "hidden",
          margin: "0",
          display: "flex",
          justifyContent: "center",
          objectFit: "contain",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat, no-repeat, repeat-x",
          backgroundSize: "cover",
          backgroundPosition: "right 20% bottom 70%",
          backgroundImage: `linear-gradient(to bottom, rgba(64, 224, 208, 0.5), rgba(11, 7, 38)), url(${backgroundImage})`,
        }}
      >
        <Container sx={{ display: "flex" }}>
          <Grid>
            <MoviePicture
              sx={{
                objectFit: "scale-down",
                width: "100%",
                height: "100%",
                boxShadow: "10px 10px 25px rgb(0, 0, 0)",
              }}
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
            <Grid
              sx={{ position: "absolute", top: "100px", marginTop: "10px" }}
            >
              <Typography
                sx={{
                  color: "white",
                  position: "relative",
                  fontSize: "30px",
                  fontFamily: "gill sans, sans-serif",
                  color: "#ffefd3",
                }}
              >
                {title}
              </Typography>
            </Grid>
            <ScoreChip
              position="relative"
              sx={{ height: "200px" }}
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
                fontSize: "10px",
                fontWeight: "bolder",
                lineHeight: "10px",
                textTransform: "uppercase",
                textAlign: "center",
                letterSpacing: "-1px",
                textShadow: "0 0 1px #001b2e, 1px 2px 1px #001b2e",
                position: "absolute",
                left: "85px",
                color: "#ffefd3",
              }}
            >
              Vote average
            </Typography>
            <HeartButton
              sx={{
                height: "30px",
                width: "30px",
                backgroundColor: "#001b2e",
                color: "white",
              }}
            />
            <Grid
              sx={{ position: "absolute", top: "350px", marginTop: "10px" }}
            >
              <Typography
                sx={{
                  color: "white",
                  position: "relative",
                  fontFamily: "gill sans, sans-serif",
                  color: "#ffefd3",
                }}
              >
                Overview
              </Typography>
              <Typography
                sx={{
                  color: "white",
                  fontStyle: "italic",
                  padding: "10px",
                  fontFamily: "gill sans, sans-serif",
                  color: "#ffefd3",
                }}
              >
                {description}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Cast movieIdProp={movieId} />
    </>
  );
}
