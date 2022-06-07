import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "tw-elements";
import { Link } from "react-router-dom";

const ebgg = ReactDOM.createRoot(document.getElementById("ebgg"));
ebgg.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
