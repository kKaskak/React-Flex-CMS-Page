import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { hydrate, render } from "react-dom";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

root.render(app);
