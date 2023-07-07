import React from "react";
import imagesData from "../assets/data/products.json";
import MenuCardInfo from "../components/MenuCardInfo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useSelected } from "../context/SelectedContext";
import { useNavigate } from "react-router-dom";

const MenuCard = ({ screenSize }) => {
  const { setSelectedElement } = useSelected();
  const navigation = useNavigate();

  return (
    <>
      <div className="menu-card-container">
        <div className="menu-card-title">
          <h1 className="menu-title">Öne çıkan yemek menülerimiz</h1>
          <pre className="menu-desc">Her zaman taze ve çıtır lezzetler...</pre>
        </div>

        <div className="menu-card-content-container">
          <Splide
            options={{
              direction: screenSize.width > 992 ? "ltr" : "ttb",
              height:
                screenSize.width > 1600
                  ? "40rem"
                  : screenSize.width > 1366
                  ? "30rem"
                  : screenSize.width > 1024
                  ? "25rem"
                  : screenSize.width > 992
                  ? "20rem"
                  : "90rem",
              autoHeight: screenSize.width > 992 ? false : true,
              type: "loop",
              drag: "free",
              perPage: screenSize.width > 992 ? 2 : 1,
              gap: "1rem",
              focus: "center",
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
                  <SplideSlide
                    key={product.id}
                    onClick={() => {
                      setSelectedElement(product.id - 1);
                      navigation("/menu");
                    }}
                  >
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
