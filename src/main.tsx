import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./Routes";
import "./style/global.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
