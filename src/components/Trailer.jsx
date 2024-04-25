import { Grid, Typography } from "@mui/material";
import React from "react";
import MovieDescription from "./MovieDescription.jsx";
import Button from "@mui/material/Button";

export default function Trailer({ trailer }) {
  <>
    return (
    <Grid sx={{ paddingRight: "10px" }} key={trailer.id}>
      <Grid
        sx={{
          position: "relative",
          display: "flex",
          marginTop: "10px",
        }}
      >
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
        ></Button>
      </Grid>
    </Grid>
    );
  </>;
}
