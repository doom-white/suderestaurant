import React from "react";
import imagesData from "../assets/data/products.json";
import ProductCardInfo from "./ProductCardInfo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import { useSelected } from "../context/SelectedContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const ProductCard = ({ screenSize }) => {
  const { setSelectedElement } = useSelected();
  const navigation = useNavigate();
  const { switchOnOff } = useTheme();

  return (
    <>
      <div className="pro-card-container">
        <div className="pro-card-title">
          <h1 className={`pro-title ${switchOnOff ? "" : "dark"}`.trimEnd()}>
            En çok beğenilen yemeklerimiz
          </h1>
          <pre className={`pro-desc ${switchOnOff ? "" : "dark"}`.trimEnd()}>
            Gaziantep lezzetleri ile tanış...
          </pre>
        </div>

        <div className="pro-card-content-container">
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
                .filter((item) => item.fav === true)
                .map((product) => (
                  <SplideSlide
                    key={product.id}
                    onClick={() => {
                      setSelectedElement(product.id - 1);
                      navigation("/menu");
                    }}
                  >
                    <ProductCardInfo product={product} key={product.id} />
                  </SplideSlide>
                ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
