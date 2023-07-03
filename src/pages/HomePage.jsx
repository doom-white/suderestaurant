import React from "react";
import CarouselMain from "../components/CarouselMain";
import ProductCard from "../components/ProductCard";
import MenuCard from "../components/MenuCard";
import chef from "../assets/icons/ico_general/chef.png";

const HomePage = ({ screenSize }) => {
  return (
    <div id="hp-top" className="hp-container">
      <div className="hp-carousel">
        <CarouselMain />
      </div>
      <ProductCard screenSize={screenSize} />
      <div className="hp-content-img"></div>
      <MenuCard screenSize={screenSize} />
      <div className="hp-content-img-2"></div>
      <div className="hp-chef">
        <a href="#hp-top">
          <img src={chef} alt="master-chef" />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
