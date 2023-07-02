import React from "react";
import imagesData from "../assets/data/products.json";
import MenuCardInfo from "./MenuCardInfo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const MenuCard = ({ screenSize }) => {
  return (
    <>
      <div className="menu-card-container">
        <div className="menu-card-title">
          <h1 className="menu-title">Öne Çıkan Yemek Menülerimiz</h1>
          <pre className="menu-desc">
            Her Zaman Taze ve Çıtır Lezzetler...{screenSize.width}
          </pre>
        </div>

        <div className="menu-card-content-container">
          <Splide
            options={{
              direction: screenSize.width > 992 ? "ltr" : "ttb",
              height: screenSize.width > 992 ? "25rem" : "40rem",
              autoHeight: screenSize > 992 ? false : true,
              type: "loop",
              drag: "free",
              perPage: screenSize.width > 992 ? 2 : 1,
              gap: screenSize.width > 992 ? "1rem" : "1.1rem",
              focus: screenSize.width > 992 ? "center" : 0,
              pagination: false,
              autoScroll: {
                speed: 1,
              },
              lazyLoad: true,
            }}
            extensions={{ AutoScroll }}
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
