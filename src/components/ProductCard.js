import React from "react";
import imagesData from "../assets/data/products.json";
import ProductCardInfo from "./ProductCardInfo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const ProductCard = () => {
  return (
    <>
      <div className="pro-card-container">
        <div className="pro-card-title">
          <h1 className="pro-title">En çok beğenilen yemeklerimiz</h1>
          <pre className="pro-desc">Gaziantep lezzetleri ayaklarınızda...</pre>
        </div>

        <div className="pro-card-content-container">
          <Splide
            options={{
              type: "loop",
              drag: "free",
              perPage: 2,
              gap: "1rem",
              focus: "center",
              pagination: false,
              autoScroll: {
                speed: 1,
              },
              rewind: true,
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
