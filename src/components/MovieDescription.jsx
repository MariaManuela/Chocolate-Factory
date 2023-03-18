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
        fontFamily: "Arial, sans-serif",
        fontSize: "12px",
        fontWeight: "bold",
        letterSpacing: "0px",
        fontSize: "16px",
        textAlign: "start",
        marginLeft: "0px",
        marginTop: "0px",
      }}
    >
      {props.value}
    </Typography>
  );
}
