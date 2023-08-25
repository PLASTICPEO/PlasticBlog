import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ContextProvider from "./context/ContextProvider.js";

import App from "./App";
import "./index.css";

const container: HTMLElement | null = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  );
}
