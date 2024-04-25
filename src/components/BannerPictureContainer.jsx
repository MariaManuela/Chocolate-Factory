import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner.jsx";
import BannerPicture from "./BannerPicture.jsx";

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

              height: "50vh",
              width: "100vw",
              objectFit: "cover",
              objectPosition: "center",
              borderBottomLeftRadius: "5px",
              borderBottomRightRadius: "5px",
              margin: "0 auto",

              [`@media screen and (max-width: 767px)`]: {
                margin: "0",
                width: "100vw",
                maxWidth: "unset",
              },

              [`@media screen and (min-width: 768px)`]: {
                display: "flex",
                justifyContent: "center",
                maxWidth: "90rem",
              },
            },
          }}
        >
          <Grid
            sx={{
              zIndex: 1,
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              width: 1,

              "@media screen and (max-width: 767px)": {
                marginTop: "250px",
              },

              "@media screen and (min-width: 768px)": {
                marginTop: "350px",
              },
            }}
          >
            <Banner />
          </Grid>
          {imagePath.map((elem) => {
            return <BannerPicture key={elem} posterPath={elem} />;
          })}
        </Grid>
      </Grid>
    </>
  );
}
