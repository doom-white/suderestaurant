import { useState } from "react";
import catalog from "../assets/icons/ico_general/menu.png";
import mlist from "../assets/icons/ico_general/mlist.png";
import productList from "../assets/data/products.json";
import GaleryMenuCard from "../components/GaleryMenuCard";
import love from "../assets/icons/ico_general/love.png";
import rated from "../assets/icons/ico_general/rated.png";
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
              : !isMenu && status === 1
              ? menuTypeTitle[status] + " " + "(" + productList.length + ")"
              : !isMenu && status === 2
              ? menuTypeTitle[1] +
                " - " +
                menuTypeTitle[status] +
                " " +
                "(" +
                productList.filter((p) => p.fav === true).length +
                ")"
              : !isMenu && status === 3
              ? menuTypeTitle[1] +
                " - " +
                menuTypeTitle[status] +
                " " +
                "(" +
                productList.filter((p) => p.rated === true).length +
                ")"
              : null}
          </div>

          <div className="menu-love-div">
            <img
              src={love}
              alt="love-menu"
              onClick={() => {
                setStatus(2);
              }}
            />
          </div>

          <div className="menu-rated-div">
            <img
              src={rated}
              alt="rated-menu"
              onClick={() => {
                setStatus(3);
              }}
            />
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
        ) : !isMenu && status === 2 ? (
          <div className="list-menu">
            <ul className="lm-container">
              {productList &&
                productList
                  .filter((p) => p.fav === true)
                  .map((product) => (
                    <ListMenuCard product={product} key={product.id} />
                  ))}
            </ul>
          </div>
        ) : !isMenu && status === 3 ? (
          <div className="list-menu">
            <ul className="lm-container">
              {productList &&
                productList
                  .filter((p) => p.rated === true)
                  .map((product) => (
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
