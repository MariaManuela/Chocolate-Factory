import React from "react";
import Navigation from "./components/Navigation.jsx";
import Movies from "./components/Movies.jsx";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Movies />
    </div>
  );
}

export default App;
