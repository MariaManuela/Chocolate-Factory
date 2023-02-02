import React from "react";
import { Typography } from "@mui/material";

export default function MovieDescription(props) {
  return (
    <Typography
      variant="caption"
      component="div"
      color="text.secondary"
      sx={{
        color: "black",
        fontFamily: "gill sans, sans-serif",
        fontSize: "14px",
        fontWeight: "bolder",
        letterSpacing: "0px",
        fontSize: "12px",
        textAlign: "start",
        marginLeft: "15px",
        marginTop: "15px",
      }}
    >
      {props.value}
    </Typography>
  );
}
