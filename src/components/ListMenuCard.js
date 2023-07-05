import React from "react";

const ListMenuCard = ({ product }) => {
  return (
    <li className="lm-item">
      <img className="lm-img" src={product.imgURL} alt={product.title} />
      <ul className="inner-lm-container">
        <li id="inner-lm-title" className="inner-lm-item">
          {product.title} {product.type && " - "}{" "}
          {product.type ? product.type : ""}
        </li>
        <li id="inner-lm-desc" className="inner-lm-item">
          {product.desc}
        </li>
      </ul>
      <span className="inner-lm-price"> {product.price} ₺</span>
    </li>
  );
};

export default ListMenuCard;
