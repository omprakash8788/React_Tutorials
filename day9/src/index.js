import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppContextProvider from "./context/AppContaxtProvider";
import AuthContextProvider from "./context/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // provider -2

  <AuthContextProvider>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </AuthContextProvider>
);
