import { useParams } from "react-router-dom";
import Movie from "./Movie.jsx";
import React, { useState, useEffect } from "react";
import * as Constans from "../constants/Constants.jsx";
import Actor from "./Actor.jsx";
import { Grid } from "@mui/material";

export default function Cast(movieIdProp) {
  let { movieId } = useParams();
  const [actors, setActors] = useState([actors]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${Constans.API_KEY}&language=en-US`;

    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setActors(data);
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
        width: "50%",
        marginLeft: "50px",
        overflow: "auto",
        scrollBehavior: "smooth",
        display: "inline-flex",
        justifyContent: "space-between",
        flexWrap: "nowrap",
        height: "45vh",
      }}
    >
      {actors?.cast?.map((actor) => {
        return (
          <Actor key={actor.id} actor={actor} actorImg={actor.profile_path} />
        );
      })}
    </Grid>
  );
}
