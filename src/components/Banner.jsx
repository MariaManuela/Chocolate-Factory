import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.jsx";
import { Grid } from "@mui/material";

export default function Banner(props) {
  return (
    <Grid>
      <div className="blur-front ">
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
      </div>
      <img src={props.imgSrc} className={props.className}></img>
    </Grid>
  );
}
