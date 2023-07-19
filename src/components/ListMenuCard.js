import React, { useEffect } from "react";
import heart from "../assets/icons/ico_general/heart.png";
import toprated from "../assets/icons/ico_general/top-rated.png";
import { useSelected } from "../context/SelectedContext";
import { useTheme } from "../context/ThemeContext";

const ListMenuCard = ({ product }) => {
  const { selectedElement, setSelectedElement } = useSelected();
  const { switchOnOff } = useTheme();

  useEffect(() => {
    if (selectedElement >= 0) {
      const element = document.querySelectorAll(".lm-item")[selectedElement];
      element.classList.add("turgut");
      setTimeout(() => {
        element.classList.remove("turgut");
        setSelectedElement(-1);
      }, 5000);
    }
  }, [selectedElement, setSelectedElement]);

  return (
    <>
      <li
        className={`lm-item  ${
          product.status
            ? switchOnOff
              ? ""
              : "lm-dark"
            : switchOnOff
            ? "lm-deprecated"
            : "lm-dark lm-deprecated"
        }`.trimEnd()}
      >
        <img className="lm-img" src={product.imgURL} alt={product.title} />
        <ul className="inner-lm-container">
          <li id="inner-lm-title" className="inner-lm-item">
            {product.title} {product.type && " - "}{" "}
            {product.type ? product.type : ""}
            <div className="lm-image-dantel">
              {product && product.fav === true ? (
                <>
                  <img className="lmid-heart" src={heart} alt="begenilenler" />
                </>
              ) : product.rated === true ? (
                <>
                  <img
                    className="lmid-rated"
                    src={toprated}
                    alt="onecikanlar"
                  />
                </>
              ) : null}
            </div>
          </li>
          <li id="inner-lm-desc" className="inner-lm-item">
            {product.desc}
          </li>
        </ul>
        <span
          className={`inner-lm-price ${switchOnOff ? "" : "lm-dark"}`.trimEnd()}
        >
          {" "}
          {product.price} {product.price && "₺"}
        </span>
      </li>
    </>
  );
};

export default ListMenuCard;
