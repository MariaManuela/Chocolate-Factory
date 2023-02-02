import React, { useEffect, useState } from "react";
import * as Constans from "../constants/Constants.jsx";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function MoviePicture(props) {
  const [img, setImg] = useState();

  const url = `https://image.tmdb.org/t/p/w500${props.posterPath}?api_key=${Constans.API_KEY}`;
  const fetchImage = async () => {
    const res = await fetch(url);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div>
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
        <Link to={`movie/${props.movieId}`}>
          <img src={img} className={props.className}></img>
        </Link>
      </Button>
    </div>
  );
}
