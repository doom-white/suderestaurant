import React from "react";
import imagesData from "../assets/data/products.json";
import ProductCardInfo from "./ProductCardInfo";
import { Splide, SplideSlide } from "@splidejs/react-splide";

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
              perPage: 2,
              perMove: 1,
              gap: "1rem",
              focus: "center",
              pagination: false,
            }}
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
