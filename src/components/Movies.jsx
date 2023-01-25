import React, { useState, useEffect } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const API_KEY = "dcb4a6c3f8dfa2fa63b84227c13b3b75";
  let picturePath = "";

  useEffect(() => {
    //const url = `https://imdb-api.com/API/Search/${API_KEY}/thor`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=thor`;

    const fetchData = async () => {
      try {
        const response = await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            for (const d of data.results) {
              console.log(d.poster_path);
            }
            //const imageUrl = `https://image.tmdb.org/t/p/w500${data.poster_path}?api_key=${API_KEY}`;
            setMovies(data);
          });
        //const json = await response.json();
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="movies-container">
      {movies?.results?.map((movie) => {
        return (
          <div className="movie-id" key={movie.id}>
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-image">{movie.image}</p>
            {movie.poster_path}
          </div>
        );
      })}
    </div>
  );
}
