import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/icons/ico_social/facebook.png";
import instagram from "../assets/icons/ico_social/instagram.png";
import whatsapp from "../assets/icons/ico_social/whatsapp.png";

const FooterNav = () => {
  return (
    <div className="footer-container">
      <div className="footer-content-container">
        <div className="footer-content-left">
          <div className="fcl-store">
            <span className="fcl-store-name">Sude Restaurant&nbsp;</span>
            <span className="fcl-store-date">&copy; 2001</span>
          </div>
          <p className="fcl-city">Bilecik , Türkiye</p>
        </div>
        <div className="footer-content-middle">
          <div className="fcm-social">
            <Link
              to={"https://www.facebook.com/sude2lokantacafe/?locale=tr_TR"}
              target="_blank"
            >
              <img
                className="fcm-social-img-first"
                src={facebook}
                alt="facebook"
              />
            </Link>
            <Link to="#">
              <img className="fcm-social-img" src={instagram} alt="instagram" />
            </Link>
            <img className="fcm-social-img" src={whatsapp} alt="whatsapp" />
          </div>
        </div>
        <div className="footer-content-right">
          <div className="fcr-mail">
            <span className="fcr-mail-text">suderestaurant@gmail.com</span>
          </div>
          <p className="fcr-tel">Tel: 8-800-458-4587</p>
        </div>
      </div>

      <div className="footer-bottom">cihatturgut@yandex.com</div>
    </div>
  );
};

export default FooterNav;
