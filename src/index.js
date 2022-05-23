import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContextProvider } from "./components/context/useContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      {/* <Router> */}
        <App />
      {/* </Router> */}
    </UserContextProvider>
  </React.StrictMode>
);
