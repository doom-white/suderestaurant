import React from "react";
import { Link } from "react-router-dom";
import facebook from "../assets/icons/ico_social/facebook.png";
import instagram from "../assets/icons/ico_social/instagram.png";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import sude from "../assets/restaurant_images/sude.jpg";
import { useTheme } from "../context/ThemeContext";

const FooterNav = () => {
  const { switchOnOff } = useTheme();
  return (
    <div
      className={`footer-container ${switchOnOff ? "".trimEnd() : "ftr-dark"} `}
    >
      <div className="footer-content-container">
        <div className="footer-content-left">
          <div className="fcl-store">
            <span
              className={`fcl-store-name ${
                switchOnOff ? "".trimEnd() : "ftr-dark"
              }`}
            >
              Sude Restaurant&nbsp;
            </span>
            <span
              className={`fcl-store-date ${
                switchOnOff ? "".trimEnd() : "ftr-dark"
              }`}
            >
              &copy; 2001
            </span>
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
            <Link
              to={"https://www.instagram.com/sude_restoran__kafe/"}
              target="_blank"
            >
              <img className="fcm-social-img" src={instagram} alt="instagram" />
            </Link>

            <div
              className={`div-whatsapp ${
                switchOnOff ? "".trimEnd() : "ftr-dark"
              }`}
            >
              <FloatingWhatsApp
                phoneNumber="+90 538 678 76 78"
                accountName="Sude Restoran & Kafe"
                statusMessage="En geç 1 saat içinde dönüş yapılır"
                chatMessage="Lezzet şölenine hoşgeldiniz..."
                allowEsc
                allowClickAway
                notification
                notificationSound
                darkMode={switchOnOff ? false : true}
                avatar={sude}
                placeholder="Mesaj"
              />
            </div>
          </div>
        </div>
        <div className="footer-content-right">
          <div className="fcr-mail">
            <span
              className={`fcr-mail-text ${
                switchOnOff ? "".trimEnd() : "ftr-dark"
              }`}
            >
              suderestaurant27@gmail.com
            </span>
          </div>
          <p className="fcr-tel">Tel: (+90) 228 212 24 24</p>
        </div>
      </div>
      <div className="footer-bottom">cihatturgut@yandex.com</div>
    </div>
  );
};

export default FooterNav;
