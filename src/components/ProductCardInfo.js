import React from "react";
import heart from "../assets/icons/ico_general/heart.png";
import { useTheme } from "../context/ThemeContext";

const ProductCardInfo = ({ product }) => {
  const { switchOnOff } = useTheme();

  return (
    <>
      <div className="pro-card-img-container">
        <img
          className="pro-card-img"
          src={product.imgURL}
          alt={product.title}
          title="Menüye Git..."
        />
        <div
          className={`pro-card-footer-dantel ${
            switchOnOff ? "" : "dark"
          }`.trimEnd()}
        >
          <span>{product.desc && product.desc}</span>
        </div>
      </div>
      <div className={`pro-card-dantel ${switchOnOff ? "" : "dark"}`.trimEnd()}>
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
