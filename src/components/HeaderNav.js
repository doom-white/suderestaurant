import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import homex32 from "../assets/icons/ico_general/homex32.png";
import homex32d from "../assets/icons/ico_general/homex32d.png";
import menux32 from "../assets/icons/ico_general/menux32.png";
import menux32d from "../assets/icons/ico_general/menux32d.png";
import galeryx32 from "../assets/icons/ico_general/galeryx32.png";
import galeryx32d from "../assets/icons/ico_general/galeryx32d.png";
import contactx32 from "../assets/icons/ico_general/contactx32.png";
import contactx32d from "../assets/icons/ico_general/contactx32d.png";
import aboutx32 from "../assets/icons/ico_general/aboutx32.png";
import aboutx32d from "../assets/icons/ico_general/aboutx32d.png";
import lamp from "../assets/icons/ico_general/lamp64x64.png";
import lampOff from "../assets/icons/ico_general/lamp64x64d.png";
import { useTheme } from "../context/ThemeContext";

const HeaderNav = () => {
  const [hideLinks, setHideLinks] = useState(false);
  const { switchOnOff, setSwitchOnOff } = useTheme();

  return (
    <header className="header-container">
      <div className="ceiling-lamp-container">
        <img
          className="ceiling-lamp"
          src={switchOnOff ? lamp : lampOff}
          alt="lamba"
          onClick={() => setSwitchOnOff(!switchOnOff)}
        />
      </div>
      <nav className={`header-nav ${switchOnOff ? "" : "hdr-dark"}`.trimEnd()}>
        <div className="header-logo-div">
          <Link to="/">
            <h1
              className={`header-logo-text ${
                switchOnOff ? "" : "hdr-dark"
              }`.trimEnd()}
            >
              Sude Restoran & Kafe
            </h1>
          </Link>
        </div>
        <button
          type="button"
          className={`btn-toggle ${
            switchOnOff
              ? `${hideLinks ? "active-toggle" : ""}`
              : `hdr-dark ${hideLinks ? "active-toggle" : ""}`
          }`.trim()}
          onClick={() => setHideLinks(!hideLinks)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`header-list-div ${
            switchOnOff ? "" : "hdr-dark"
          }`.trimEnd()}
        >
          <NavLink to="/">
            <img src={switchOnOff ? homex32 : homex32d} alt="home" />
            <p>ana sayfa</p>
          </NavLink>
          <NavLink to="/menu">
            <img src={switchOnOff ? menux32 : menux32d} alt="menu" />
            <p>menü</p>
          </NavLink>
          <NavLink to="/galeri">
            <img src={switchOnOff ? galeryx32 : galeryx32d} alt="galery" />
            <p>galeri</p>
          </NavLink>
          <NavLink to="/iletisim">
            <img src={switchOnOff ? contactx32 : contactx32d} alt="contact" />
            <p>iletişim</p>
          </NavLink>
          <NavLink to="/hakkimizda">
            <img src={switchOnOff ? aboutx32 : aboutx32d} alt="about" />
            <p>hakkımızda</p>
          </NavLink>
          <div className="indicator"></div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
