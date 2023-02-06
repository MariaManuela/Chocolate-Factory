import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../redux/actions/movieActions";
import { red } from "@mui/material/colors";

export default function HeartButton({ movieId }) {
  const isFavourite = useSelector((state) =>
    state.moviesReducer.favouriteMovies?.includes(movieId)
  );

  const toggleFavourite = isFavourite ? removeFromFavourites : addToFavourites;

  const dispatch = useDispatch();
  return (
    <IconButton
      onClick={() => {
        dispatch(toggleFavourite(movieId));
      }}
      disableRipple={true}
      disableFocusRipple={true}
      disableTouchRipple={true}
      sx={{
        backgroundColor: "#001b2e",
        color: "white",
        height: "45px",
        width: "45px",
        disableElevation: "false",
        left: "250px",
      }}
    >
      {isFavourite ? (
        <FavoriteIcon sx={{ color: "red" }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </IconButton>
  );
}
