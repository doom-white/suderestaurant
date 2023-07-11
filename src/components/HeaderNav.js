import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import homex32 from "../assets/icons/ico_general/homex32.png";
import menux32 from "../assets/icons/ico_general/menux32.png";
import galeryx32 from "../assets/icons/ico_general/galeryx32.png";
import contactx32 from "../assets/icons/ico_general/contactx32.png";
import aboutx32 from "../assets/icons/ico_general/aboutx32.png";

const HeaderNav = () => {
  const [hideLinks, setHideLinks] = useState(false);

  return (
    <header className="header-container">
      <nav className="header-nav light-nav">
        <div className="header-logo-div">
          <Link to="/">
            <h1 className="header-logo-text">Sude Restoran & Kafe</h1>
          </Link>
        </div>
        <button
          type="button"
          className={`btn-toggle ${hideLinks ? "active-toggle" : ""}`.trim()}
          onClick={() => setHideLinks(!hideLinks)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="header-list-div">
          <NavLink to="/">
            <img src={homex32} alt="home" />
            <p>ana sayfa</p>
          </NavLink>
          <NavLink to="/menu">
            <img src={menux32} alt="menu" />
            <p>menü</p>
          </NavLink>
          <NavLink to="/galeri">
            <img src={galeryx32} alt="galery" />
            <p>galeri</p>
          </NavLink>
          <NavLink to="/iletisim">
            <img src={contactx32} alt="contact" />
            <p>iletişim</p>
          </NavLink>
          <NavLink to="/hakkimizda">
            <img src={aboutx32} alt="about" />
            <p>hakkımızda</p>
          </NavLink>
          <div className="indicator"></div>
        </div>
      </nav>
    </header>
  );
};

export default HeaderNav;
