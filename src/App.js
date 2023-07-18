import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import GaleryPage from "./pages/GaleryPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import { useTheme } from "./context/ThemeContext";
import NotFoundPage from "./pages/NotFoundPage";
import PageLayout from "./components/PageLayout";

const App = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const { switchOnOff, setHideLinks } = useTheme();

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setHideLinks(false);
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setHideLinks]);

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      <div
        className={`app-main-container ${switchOnOff ? "".trimEnd() : "dark"}`}
      >
        <Routes>
          <Route element={<PageLayout screenSize={screenSize} />}>
            <Route path="/" element={<HomePage screenSize={screenSize} />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/galeri" element={<GaleryPage />} />
            <Route path="/iletisim" element={<ContactPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
