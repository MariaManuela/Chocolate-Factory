import React from "react";
import { CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function ScoreChip(props) {
  const MIN = 0;
  const MAX = 10;
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

  return (
    <Box sx={{ position: "absolute", top: "-10px", right: "-10px" }}>
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          {...props}
          variant="determinate"
          value={normalise(props.value)}
          borderRadius="2px"
          sx={{
            borderWidth: "3px",
            width: "70px",
            height: "70px",
            borderRadius: "100%",
            boxShadow: "inset 0 0 0px 11px #adb6c4",
            color: "#294c60",
            backgroundColor: "#adb6c4",
          }}
          thickness={10}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
            sx={{
              color: "#fff",
              fontFamily: "oswald",
              fontSize: "15px",
              fontWeight: "bolder",
              lineHeight: "60px",
              textTransform: "uppercase",
              textAlign: "center",
              letterSpacing: "-1px",
              textShadow: "0 0 3px #001b2e, 1px 1px 1px #001b2e",
              marginRight: "2px",
              marginBottom: "2px",
            }}
          >{`${props.value}`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
