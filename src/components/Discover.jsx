import React, { useState, useEffect, useContext } from "react";
import * as Constans from "../constants/Constants.jsx";
import Movie from "./Movie.jsx";
import MovieCarousel from "./Carousel.jsx";
import { RoutingContext, pagesMapping } from "../routing/Routing.js";

export default function Discover() {
  const [movies, setMovies] = useState([]);
  const { setPage } = useContext(RoutingContext);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${Constans.API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data);
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="discover-movie-part">
      <MovieCarousel />
      <div
        className="discover-movies-container"
        style={{ width: "80%", overflow: "auto", scrollBehavior: "smooth" }}
      >
        {movies?.results?.map((movie) => {
          return (
            <Movie
              key={movie.id}
              movie={movie}
              backgroundImg={movie.poster_path}
              chip
            />
          );
        })}
      </div>
    </div>
  );
}
