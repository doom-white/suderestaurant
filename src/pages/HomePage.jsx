import React from "react";
import CarouselMain from "../components/CarouselMain";
import ProductCard from "../components/ProductCard";
import MenuCard from "../components/MenuCard";

const HomePage = ({ screenSize }) => {
  return (
    <div className="hp-container">
      <div className="hp-carousel">
        <CarouselMain />
      </div>
      <ProductCard screenSize={screenSize} />
      <div className="hp-content-img"></div>
      <MenuCard screenSize={screenSize} />
      <div className="hp-content-img-2"></div>
    </div>
  );
};

export default HomePage;
