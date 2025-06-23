import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import datacontext from "./Context/Context.jsx"
import Context from "./Context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <App />
    </Context>
  </StrictMode>
);
