import React from "react";
import CarouselMain from "../components/CarouselMain";
import ProductCard from "../components/ProductCard";
import MenuCard from "../components/MenuCard";

const HomePage = () => {
  return (
    <div className="hp-container">
      <div className="hp-carousel">
        <CarouselMain />
      </div>
      <ProductCard />
      <div className="hp-content-img"></div>
      <MenuCard />
      <div className="hp-content-img-2"></div>
    </div>
  );
};

export default HomePage;
