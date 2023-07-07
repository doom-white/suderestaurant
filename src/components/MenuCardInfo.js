import React from "react";
import rated from "../assets/icons/ico_general/top-rated.png";

const MenuCardInfo = ({ product }) => {
  return (
    <>
      <div className="menu-card-img-container">
        <img
          className="menu-card-img"
          src={product.imgURL}
          alt={product.title}
          title="Menüye Git..."
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
          <img src={rated} alt="one-cikanlar" />
        </span>
      </div>
    </>
  );
};

export default MenuCardInfo;
