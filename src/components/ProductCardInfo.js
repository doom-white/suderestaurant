import React from "react";
import heart from "../assets/icons/ico_general/heart.png";

const ProductCardInfo = ({ product }) => {
  return (
    <>
      <img className="pro-card-img" src={product.imgURL} alt="" />
      <div className="pro-card-dantel">
        <span>
          {product.title} {product.type && "-"}{" "}
          {product.type ? product.type : ""}
        </span>
        <span>
          <img src={heart} alt="kalp" />
        </span>
      </div>
      <div className="pro-card-footer-dantel">
        <span>{product.desc && product.desc}</span>
      </div>
    </>
  );
};

export default ProductCardInfo;
