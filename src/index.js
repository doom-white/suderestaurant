import React from "react";
import ReactDOM from "react-dom/client";
import "@splidejs/react-splide/css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SelectedProvider from "./context/SelectedContext";
import ModalProvider from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedProvider>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </SelectedProvider>
  </React.StrictMode>
);
