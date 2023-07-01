import React from "react";
import imagesData from "../assets/data/products.json";
import MenuCardInfo from "./MenuCardInfo";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const MenuCard = () => {
  return (
    <>
      <div className="menu-card-container">
        <div className="menu-card-title">
          <h1 className="menu-title">Öne Çıkan Yemek Menülerimiz</h1>
          <pre className="menu-desc">Her Zaman Taze ve Çıtır Lezzetler...</pre>
        </div>

        <div className="menu-card-content-container">
          <Splide
            options={{
              type: "loop",
              perPage: 2,
              perMove: 1,
              gap: "1rem",
              focus: "center",
              pagination: false,
            }}
          >
            {imagesData &&
              imagesData
                .filter((item) => item.rated === true)
                .map((product) => (
                  <SplideSlide>
                    <MenuCardInfo product={product} key={product.id} />
                  </SplideSlide>
                ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
