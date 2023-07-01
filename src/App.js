import React from "react";
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <div className="app-main-container">
        <HeaderNav />
        <HomePage />
        <FooterNav />
      </div>
    </>
  );
};

export default App;
