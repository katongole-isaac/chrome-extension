import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";
import "./style.css";

const root = document.getElementById("app")!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
