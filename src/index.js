import React from "react";
import ReactDOM from "react-dom/client";
import "@splidejs/react-splide/css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SelectedProvider from "./context/SelectedContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SelectedProvider>
  </React.StrictMode>
);
