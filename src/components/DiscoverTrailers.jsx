import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Trailer from "./Trailer.jsx";
import { Grid } from "@mui/joy";

export default function DiscoverTrailers(movieIdProp) {
  let { movieId } = useParams();
  const [trailers, setTrailers] = useState([trailers]);

  useEffect(() => {
    const url = ` https://api.themoviedb.org/3/movie/${movieId}/videos`;

    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setTrailers(data);
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginTop: "10px",
      }}
    >
      <Grid
        sx={{
          width: "80%",
          overflow: "auto",
          scrollBehavior: "smooth",
          display: "inline-flex",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          height: "45vh",
        }}
      >
        {trailers?.results?.map((trailer) => {
          return <Trailer key={trailer.id} trailer={trailer} />;
        })}
      </Grid>
    </Grid>
  );
}
