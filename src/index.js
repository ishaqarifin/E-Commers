import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./components/context/useContext";

import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "./components/darkmode/ThemeContext";

const client = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <ThemeProvider>
      <QueryClientProvider client={client}>
      <Router>
        <App />
      </Router>
      </QueryClientProvider>
      </ThemeProvider>
    </UserContextProvider>
  </React.StrictMode>
);
