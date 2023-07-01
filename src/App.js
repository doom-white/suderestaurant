import React from "react";
import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <HeaderNav />
      <HomePage />
      <FooterNav />
    </>
  );
};

export default App;
