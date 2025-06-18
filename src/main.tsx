import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app";
import "./style.css";

const container = document.getElementById("app")!;

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
