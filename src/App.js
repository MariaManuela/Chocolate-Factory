import React from "react";
import Navigation from "./components/Navigation.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import { Outlet } from "react-router-dom";

import "./App.scss";
import { Opacity } from "@mui/icons-material";

function App() {
  return (
    <div className="first-page-style">
      <Provider store={store}>
        <Navigation />
        <div id="first-page">
          <Outlet />
        </div>
      </Provider>
    </div>
  );
}

export default App;
