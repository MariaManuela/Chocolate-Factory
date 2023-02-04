import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AddToFavorites } from "../actions/MoviePageActions.jsx";

// const heartButtonElem = document.getElementById("heart-button");

export default function HeartButton(props) {
  const buttonState = useSelector((state) => state.addToFav.value);
  const dispatch = useDispatch();
  return (
    <IconButton
      onClick={() => {
        dispatch(AddToFavorites(props.movieId));
      }}
    >
      {buttonState === false ? <FavoriteBorderIcon /> : <FavoriteIcon />}
    </IconButton>
  );
}
