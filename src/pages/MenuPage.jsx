import { useState } from "react";
import catalog from "../assets/icons/ico_general/menu.png";
import mlist from "../assets/icons/ico_general/mlist.png";
import productList from "../assets/data/products.json";
import GaleryMenuCard from "../components/GaleryMenuCard";
import heart from "../assets/icons/ico_general/heart.png";
import top_rated from "../assets/icons/ico_general/top-rated.png";
import ListMenuCard from "../components/ListMenuCard";

const MenuPage = () => {
  const [isMenu, setIsMenu] = useState(true);
  const [status, setStatus] = useState(0);
  const [menuTypeTitle] = useState([
    "Katalog Menü",
    "Liste Menü",
    "En Çok Beğenilenler",
    "Öne Çıkanlar",
  ]);
  return (
    <>
      <section className="menu-container">
        <div className="menu-type">
          <div className="menu-type-title">
            {isMenu && status === 0
              ? menuTypeTitle[status] + " " + "(" + productList.length + ")"
              : isMenu && status === 2
              ? menuTypeTitle[0] +
                " - " +
                menuTypeTitle[status] +
                " " +
                "(" +
                productList.filter((p) => p.fav === true).length +
                ")"
              : isMenu && status === 3
              ? menuTypeTitle[0] +
                " - " +
                menuTypeTitle[status] +
                " " +
                "(" +
                productList.filter((p) => p.rated === true).length +
                ")"
              : null}
          </div>
          <div className="menu-catalog-div">
            <img
              src={catalog}
              alt="galeri-menu"
              onClick={() => {
                setIsMenu(true);
                setStatus(0);
              }}
            />
            <ul className="sub-menu-catalog">
              <li onClick={() => setStatus(2)}>
                En çok beğenilenler
                <img className="sm-heart" src={heart} alt="begenilenler" />
              </li>
              <li>
                <span></span>
              </li>
              <li onClick={() => setStatus(3)}>
                Öne çıkanlar
                <img className="sm-rated" src={top_rated} alt="onecikanlar" />
              </li>
              <li className="sm-all-menu" onClick={() => setStatus(0)}>
                Tüm Menüler
              </li>
            </ul>
          </div>

          <div className="menu-list-div">
            <img
              src={mlist}
              alt="liste-menu"
              onClick={() => {
                setIsMenu(false);
                setStatus(1);
              }}
            />
            <ul className="sub-menu-list">
              <li onClick={() => setStatus(2)}>
                En çok beğenilenler
                <img className="sm-heart" src={heart} alt="begenilenler" />
              </li>
              <li>
                <span></span>
              </li>
              <li onClick={() => setStatus(3)}>
                Öne çıkanlar
                <img className="sm-rated" src={top_rated} alt="onecikanlar" />
              </li>
              <li className="sm-all-menu" onClick={() => setStatus(1)}>
                Tüm Menüler
              </li>
            </ul>
          </div>
        </div>
        {isMenu && status === 0 ? (
          <div className="galery-menu">
            {productList &&
              productList.map((product) => (
                <GaleryMenuCard product={product} key={product.id} />
              ))}
          </div>
        ) : isMenu && status === 2 ? (
          <div className="galery-menu">
            {productList &&
              productList
                .filter((p) => p.fav === true)
                .map((product) => (
                  <GaleryMenuCard product={product} key={product.id} />
                ))}
          </div>
        ) : isMenu && status === 3 ? (
          <div className="galery-menu">
            {productList &&
              productList
                .filter((p) => p.rated === true)
                .map((product) => (
                  <GaleryMenuCard product={product} key={product.id} />
                ))}
          </div>
        ) : !isMenu && status === 1 ? (
          <div className="list-menu">
            <ul className="lm-container">
              {productList.map((product) => (
                <ListMenuCard product={product} key={product.id} />
              ))}
            </ul>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default MenuPage;
