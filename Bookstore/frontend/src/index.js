import "./index.css";

import { createRoot } from "react-dom/client";
import React from "react";

import App from "./App";
import { BookContextProvider } from "./context/BookContext";
import { AuthContextProvider } from "./context/AuthContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
