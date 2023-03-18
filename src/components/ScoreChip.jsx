import React from "react";
import { CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { color } from "@mui/system";

export default function ScoreChip(props) {
  const MIN = 0;
  const MAX = 10;
  const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

  const statusColors = {
    good: "#3FD631",
    average: "#ECFF42",
    bad: "#DF4444",
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: props.top,
        right: props.right,
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          {...props}
          variant="determinate"
          value={normalise(props.value)}
          sx={{
            borderWidth: "3px",
            width: "70px",
            height: "70px",
            borderRadius: "100%",
            color:
              props.value < 6.0
                ? statusColors.bad
                : props.value > 6.0 && props.value < 7.5
                ? statusColors.average
                : statusColors.good,
            backgroundColor: "#001b2e",
            strokeWidth: "4px",
            strokeLinecap: "butt",
            "& .css-oxts8u-MuiCircularProgress-circle": {
              strokeWidth: "4px",
            },
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
              fontFamily: "gill sans, sans-serif",
              fontSize: "14px",
              fontWeight: "bolder",
              lineHeight: "60px",
              textTransform: "uppercase",
              textAlign: "center",
              letterSpacing: "-1px",
              textShadow: "0 0 1px #001b2e, 1px 2px 1px #001b2e",
              marginRight: "2px",
              marginBottom: "7px",
              marginLeft: "1px",
            }}
          >{`${Math.round(props.value * 10) / 10}`}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
