import React from "react";
import Navigation from "./components/Navigation.jsx";
import GetMovies from "./components/Movies.jsx";
import "./App.scss";
function App() {
  return (
    <div className="app">
      <Navigation />
      <GetMovies />
    </div>
  );
}

export default App;
