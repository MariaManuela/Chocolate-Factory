import React, { useState } from "react";
import { Container } from "@mui/material";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import AdbIcon from "@mui/icons-material/Adb";
import SearchBar from "./SearchBar.jsx";

export default function Navigation() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#001b2e" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} />
          {/* <SearchBar /> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
