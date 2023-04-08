import { CenterFocusStrong } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import BannerPicture from "./BannerPicture.jsx";
import SearchBar from "./SearchBar.jsx";

export default function BannerPictureContainer() {
  const backgroundImage = useSelector((state) => {
    return state.moviesReducer.movieBackgroundPicture.movieBackgroundSrc;
  });

  const imagePath = useSelector((state) => {
    let imagePathList = [];
    const pathList = state.moviesReducer.randomBannerImage.randomBannerImageSrc;
    for (let i = 0; i < pathList.length; i++) {
      imagePathList.push(
        state.moviesReducer.randomBannerImage.randomBannerImageSrc[i]
          ?.poster_path
      );
    }

    return imagePathList.splice(
      Math.floor(Math.random() * imagePathList.length),
      1
    );
  });

  return (
    <>
      {/* <Grid
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
          height: "100%",
          width: "100%",
          backgroundPositionY: "center",
          backgroundRepeat: "no-repeat, no-repeat, repeat-x",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "right 20% bottom 70%",
          background: `linear-gradient(to bottom,rgb(58 59 72 / 90%), rgb(11 7 38))`,
        }}
      > */}
      {/* <Container sx={{ display: "flex" }}> */}
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {imagePath.map((elem) => {
          return (
            <BannerPicture
              key={elem}
              posterPath={elem}
              className="first-page-banner"
            />
          );
        })}
      </Grid>

      {/* </Container> */}
      {/* </Grid> */}
    </>
  );
}
