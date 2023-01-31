import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";
import { Router } from "./routing/Routing";

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
);
