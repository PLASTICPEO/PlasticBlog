import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ContextProvider from "./context/ContextProvider.js";

import App from "./App";
import "./index.css";

const container: any = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);
