import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ContextProvider from "./context/ContextProvider.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#62929E",
          colorBorder: "#0B0A0A",
        },
      }}
    >
      <ContextProvider>
        <Router>
          <App />
        </Router>
      </ContextProvider>
    </ConfigProvider>
  </QueryClientProvider>
);
