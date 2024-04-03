import { CenterFocusStrong } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner.jsx";
import BannerPicture from "./BannerPicture.jsx";
import SearchBar from "./SearchBar.jsx";

export default function BannerPictureContainer() {
  const padding = "20px";
  const halfPadding = "10px";

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
      <Grid>
        <Grid
          sx={{
            "& img": {
              filter:
                "brightness(40%) contrast(100%) sepia(100%) hue-rotate(500deg) saturate(150%)",
              opacity: 1.0,
            },
          }}
        >
          <Grid
            sx={{
              zIndex: 1, // Ensure this overlay is above the main grid
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              // top: "350px",
            }}
          >
            <Banner className="search-grid" />
          </Grid>
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
      </Grid>
    </>
  );
}
