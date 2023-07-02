import React from "react";
import heart from "../assets/icons/ico_general/heart.png";

const ProductCardInfo = ({ product }) => {
  return (
    <>
      <div className="pro-card-img-container">
        <img
          className="pro-card-img"
          src={product.imgURL}
          alt={product.title}
        />
        <div className="pro-card-footer-dantel">
          <span>{product.desc && product.desc}</span>
        </div>
      </div>
      <div className="pro-card-dantel">
        <span>
          {product.title} {product.type && "-"}{" "}
          {product.type ? product.type : ""}
        </span>
        <span>
          <img src={heart} alt="kalp" />
        </span>
      </div>
    </>
  );
};

export default ProductCardInfo;
