import React from "react";
import Navigation from "./components/Navigation.jsx";
import Discover from "./components/Discover.jsx";
import MoviePage from "./components/MoviePage.jsx";

import { pagesMapping, RoutingContext } from "./routing/Routing.js";
import { useContext } from "react";

import "./App.scss";

function App() {
  const { page } = useContext(RoutingContext);
  return (
    <div className="app">
      <Navigation />
      {pagesMapping.home === page && <Discover />}
      {pagesMapping.movie === page && <MoviePage />}
    </div>
  );
}

export default App;
