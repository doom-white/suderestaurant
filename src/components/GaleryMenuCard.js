import React from "react";
import heart from "../assets/icons/ico_general/heart.png";
import toprated from "../assets/icons/ico_general/top-rated.png";

const GaleryMenuCard = ({ product }) => {
  return (
    <div className="gm-container">
      <div className="gm-content">
        <div className="gm-dantel">{product.desc}</div>
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

          <h3 className="gm-con-price">{product.price} ₺</h3>
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
