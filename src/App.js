import React from "react";
import Navigation from "./components/Navigation.jsx";
import Movies from "./components/Movies.jsx";
import Discover from "./components/first_page/Discover.jsx";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Discover />
      {/* <Movies /> */}
    </div>
  );
}

export default App;
