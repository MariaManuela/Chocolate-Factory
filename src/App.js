import React from "react";
import Navigation from "./components/Navigation.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import { Outlet } from "react-router-dom";

import "./App.scss";
import { Grid } from "@mui/material";

function App() {
  return (
    <Grid
      sx={{
        backgroundColor: "#0c0c0c",
      }}
    >
      <Provider store={store}>
        <Navigation />
        <div id="first-page">
          <Outlet />
        </div>
      </Provider>
    </Grid>
  );
}

export default App;
