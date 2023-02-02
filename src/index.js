import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ErrorPage from "./components/ErrorPage.jsx";
import Discover from "./components/Discover.jsx";
import MoviePage from "./components/MoviePage.jsx";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "movie/:movieId",
        element: <MoviePage />,
      },
      {
        path: "/",
        element: <Discover />,
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
