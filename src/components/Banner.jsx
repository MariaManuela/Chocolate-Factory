import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function Banner(props) {
  return (
    <Grid>
      <div className="blur-front ">
        <Grid>
          <Grid>
            <Typography
              sx={{
                color: "white",
                position: "relative",
                fontSize: "30px",
                fontFamily: "gill sans, sans-serif",
                color: "#ffefd3",
              }}
            >
              Welcome.
            </Typography>
          </Grid>
          <Grid
            className="search-bar-banner"
            sx={{
              "& .css-1nrlq1o-MuiFormControl-root": {
                width: "90%",
                //: "30px",
                display: "inline",
              },
            }}
          >
            <SearchBar />
          </Grid>
        </Grid>
      </div>
      <img src={props.imgSrc} className={props.className}></img>
    </Grid>
  );
}
