import React, { useEffect, useState } from "react";
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";
import HomePage from "./pages/HomePage";

const App = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

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
      <div className="app-main-container">
        <HeaderNav />
        <HomePage screenSize={screenSize} />
        <FooterNav />
      </div>
    </>
  );
};

export default App;
