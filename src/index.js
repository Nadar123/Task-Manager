import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { GlobalStyles } from "./styles/reset-styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <GlobalStyles />
    <App />
  </AuthContextProvider>
);
