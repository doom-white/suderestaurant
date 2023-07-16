import React, { useEffect, useState } from "react";
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import GaleryPage from "./pages/GaleryPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import MasterChef from "./components/MasterChef";
import {
  handleScroll,
  handleScrollRemove,
} from "./helpers/CatchBottomPosition";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { pathname } = useLocation();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [isBottom, setIsBottom] = useState(false);
  const { switchOnOff } = useTheme();

  useEffect(() => {
    handleScroll(setIsBottom);
    return () => handleScrollRemove();
  }, [pathname]);

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

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
        <HeaderNav />
        <Routes>
          <Route path="/" element={<HomePage screenSize={screenSize} />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/galeri" element={<GaleryPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
        </Routes>
        <MasterChef isBottom={isBottom} />
        <FooterNav />
      </div>
    </>
  );
};

export default App;
