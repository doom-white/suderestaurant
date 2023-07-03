import React from "react";
import CarouselMain from "../components/CarouselMain";
import ProductCard from "../components/ProductCard";
import MenuCard from "../components/MenuCard";
import chef from "../assets/icons/ico_general/chef.png";

const HomePage = ({ screenSize }) => {
  const goToTheTopOfPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hp-container">
      <div className="hp-carousel">
        <CarouselMain />
      </div>
      <ProductCard screenSize={screenSize} />
      <div className="hp-content-img"></div>
      <MenuCard screenSize={screenSize} />
      <div className="hp-content-img-2"></div>
      <div className="hp-chef-div">
        <img
          className="hp-chef"
          src={chef}
          alt="master-chef"
          onClick={goToTheTopOfPage}
        />
      </div>
    </div>
  );
};

export default HomePage;
