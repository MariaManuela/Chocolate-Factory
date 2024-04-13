import { Grid, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import ActorPicture from "./ActorPicture.jsx";

export default function Actor({ actor, actorImg }) {
  return (
    <Grid
      sx={{
        paddingRight: "10px",
        padding: "5px",
        fontsize: "10px",
        textAlign: "center",
      }}
      key={actor.id}
    >
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
          {/* <Link to={`movie/${movie.id}`}>
            <MoviePicture
              className="discover-movie-photo"
              posterPath={movie.poster_path}
              movieId={movie.id}
            />
          </Link> */}
        </Button>
      </Grid>
      <ActorPicture
        sx={{
          height: "190px",
          borderRadius: "5px",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px," +
            "rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
        profilePath={actorImg}
      />
      <Typography
        variant="caption"
        component="div"
        color="text.secondary"
        sx={{
          color: "#ffefd3",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          fontWeight: "bold",
          letterSpacing: "0px",
          textAlign: "start",
          marginLeft: "0px",
          marginTop: "0px",
        }}
      >
        {actor.name}
      </Typography>
      <hr
        style={{
          background: "black",
          color: "black",
          height: "0.1px",
          width: "80%",
          marginTop: "0px",
          marginLeft: "0px",
        }}
      />
      <Typography
        variant="caption"
        component="div"
        color="text.secondary"
        sx={{
          color: "#ffefd3",
          fontFamily: "Arial, sans-serif",
          fontSize: "12px",
          fontWeight: "bold",
          textAlign: "start",
          marginLeft: "0px",
          marginTop: "0px",
          fontStyle: "italic",
        }}
      >
        {actor.character}
      </Typography>
    </Grid>
  );
}
