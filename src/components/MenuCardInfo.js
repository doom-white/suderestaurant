import React from "react";
import rated from "../assets/icons/ico_general/top-rated.png";
import { useTheme } from "../context/ThemeContext";

const MenuCardInfo = ({ product }) => {
  const { switchOnOff } = useTheme();

  return (
    <>
      <div className="menu-card-img-container">
        <img
          className="menu-card-img"
          src={product.imgURL}
          alt={product.title}
          title="Menüye Git..."
        />
        <div
          className={`menu-card-footer-dantel ${
            switchOnOff ? "" : "menu-dark"
          }`.trimEnd()}
        >
          <span>{product.desc && product.desc}</span>
        </div>
      </div>
      <div
        className={`menu-card-dantel ${
          switchOnOff ? "" : "menu-dark"
        }`.trimEnd()}
      >
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
