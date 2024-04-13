import React from "react";
import SearchBar from "./SearchBar.jsx";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

export default function Banner(props) {
  return (
    <Grid
      sx={{
        width: "80%",
      }}
    >
      <Grid>
        <Typography
          sx={{
            color: "#ffefd3",
            position: "relative",
            fontSize: "30px",
            fontFamily: "gill sans, sans-serif",
            color: "#ffefd3",
          }}
        >
          Welcome.
        </Typography>
        <SearchBar />
      </Grid>
    </Grid>
  );
}
