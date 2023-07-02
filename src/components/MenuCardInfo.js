import React from "react";
import toprated from "../assets/icons/ico_general/top-rated.png";

const MenuCardInfo = ({ product }) => {
  return (
    <>
      <div className="menu-card-img-container">
        <img
          className="menu-card-img"
          src={product.imgURL}
          alt={product.title}
        />
        <div className="menu-card-footer-dantel">
          <span>{product.desc && product.desc}</span>
        </div>
      </div>
      <div className="menu-card-dantel">
        <span>
          {product.title} {product.type && "-"}{" "}
          {product.type ? product.type : ""}
        </span>
        <span>
          <img src={toprated} alt="one_cikan" />
        </span>
      </div>
    </>
  );
};

export default MenuCardInfo;
