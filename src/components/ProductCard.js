import React from "react";
import imagesData from "../assets/data/products.json";
import ProductCardInfo from "./ProductCardInfo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const ProductCard = ({ screenSize }) => {
  return (
    <>
      <div className="pro-card-container">
        <div className="pro-card-title">
          <h1 className="pro-title">En çok beğenilen yemeklerimiz</h1>
          <pre className="pro-desc">
            Gaziantep lezzetleri ayaklarınızda...{screenSize.width}
          </pre>
        </div>

        <div className="pro-card-content-container">
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
                .filter((item) => item.fav === true)
                .map((product) => (
                  <SplideSlide>
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
