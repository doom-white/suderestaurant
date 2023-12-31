import React, { useEffect } from "react";
import heart from "../assets/icons/ico_general/heart.png";
import toprated from "../assets/icons/ico_general/top-rated.png";
import { useSelected } from "../context/SelectedContext";
import { useTheme } from "../context/ThemeContext";

const GaleryMenuCard = ({ product }) => {
  const { selectedElement, setSelectedElement } = useSelected();
  const { switchOnOff } = useTheme();

  useEffect(() => {
    if (selectedElement >= 0) {
      const element = document.querySelectorAll(".gm-content")[selectedElement];
      element.classList.add("cihat");
      setTimeout(() => {
        element.classList.remove("cihat");
        setSelectedElement(-1);
      }, 5000);
    }
  }, [selectedElement, setSelectedElement]);

  return (
    <div className="gm-container">
      <div
        className={`gm-content ${
          product.status
            ? switchOnOff
              ? ""
              : "gm-dark"
            : switchOnOff
            ? "gm-deprecated"
            : "gm-dark gm-deprecated"
        }`.trimEnd()}
      >
        <div className={`gm-dantel ${switchOnOff ? "" : "gm-dark"}`.trimEnd()}>
          {product.desc}
        </div>
        <div className="gm-con-img-div">
          <img className="gm-con-img" src={product.imgURL} alt="resim" />
        </div>
        <div className="gm-con-title-div">
          <h3 className="gm-con-title">{product.title}</h3>
          {product.type && (
            <small className="gm-con-title-sm">
              ({product.type ? product.type : ""})
            </small>
          )}

          <h3
            className={`gm-con-price ${switchOnOff ? "" : "gm-dark"}`.trimEnd()}
          >
            {product.price} {product.price && "₺"}
          </h3>
        </div>
        <div className="gm-image-dantel">
          {product && product.fav === true ? (
            <>
              <img className="gmid-heart" src={heart} alt="begenilenler" />
            </>
          ) : product.rated === true ? (
            <>
              <img className="gmid-rated" src={toprated} alt="onecikanlar" />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default GaleryMenuCard;
