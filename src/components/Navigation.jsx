import React from "react";
import { Container } from "@mui/material";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";

export default function Navigation() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#001b2e" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
