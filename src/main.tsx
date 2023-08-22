// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App";
import ContextProvider from "./context/ContextProvider.js";
import "./index.css";

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <QueryClientProvider client={queryClient}>
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>

  // </QueryClientProvider>
);
