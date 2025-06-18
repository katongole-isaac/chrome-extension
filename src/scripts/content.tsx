import React from "react";
import ReactDOM from "react-dom/client";

import "../style.css";
import ContentScriptApp from "./app";

const mountReactApp = () => {
  // const id = "loom-companion-mv3";
  const id = "my-extension-root";
  let container = document.getElementById(id);

  if (!container) {
    container = document.createElement("div");
    container.id = id;
    document.body.appendChild(container);
  }

  // Cache the root on the DOM element to avoid re-creating it
  if (!(container as any)._reactRoot) {
    (container as any)._reactRoot = ReactDOM.createRoot(container);
    (container as any)._reactRoot.render(<ContentScriptApp />);
  } else {
    // Optional: re-render or update the ContentScriptApp if needed
    (container as any)._reactRoot.render(<ContentScriptApp />);
  }
};

mountReactApp();
