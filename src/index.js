import React from "react";
import ReactDOM from "react-dom/client";
import "@splidejs/react-splide/css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import SelectedProvider from "./context/SelectedContext";
import ModalProvider from "./context/ModalContext";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedProvider>
      <ModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </ModalProvider>
    </SelectedProvider>
  </React.StrictMode>
);
