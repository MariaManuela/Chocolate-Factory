import React from "react";
import Navigation from "./components/Navigation.jsx";

import { Outlet } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <>
      <Navigation />
      <div id="first-page">
        <Outlet />
      </div>
    </>
  );
}

export default App;
