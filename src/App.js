import React from "react";
import Navigation from "./components/Navigation.jsx";
import GetMovies from "./components/Movies.jsx";
import "./App.scss";
import MoviePicture from "./components/MoviePicture.jsx";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Movies />
    </div>
  );
}

export default App;
