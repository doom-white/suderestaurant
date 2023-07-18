import { useEffect, useRef, useState } from "react";
import catalog from "../assets/icons/ico_general/menu.png";
import catalogdark from "../assets/icons/ico_general/menud.png";
import mlist from "../assets/icons/ico_general/mlist.png";
import mlistdark from "../assets/icons/ico_general/mlistd.png";
import productList from "../assets/data/products.json";
import GaleryMenuCard from "../components/GaleryMenuCard";
import love from "../assets/icons/ico_general/love.png";
import lovedark from "../assets/icons/ico_general/loved.png";
import search from "../assets/icons/ico_general/search.png";
import searchdark from "../assets/icons/ico_general/searchd.png";
import rated from "../assets/icons/ico_general/rated.png";
import rateddark from "../assets/icons/ico_general/ratedd.png";
import menu_search_close from "../assets/icons/ico_general/close.png";
import menu_search_magnifying from "../assets/icons/ico_general/magnifying.png";
import ListMenuCard from "../components/ListMenuCard";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const menuPageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.3,
      linear: "linear",
    },
  },
};

const searchVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeInOut",
    },
  },
};

const MenuPage = () => {
  const { switchOnOff } = useTheme();
  const searchRef = useRef(null);
  const [isMenu, setIsMenu] = useState(true);
  const [searchMenu, setSearchMenu] = useState(false);
  const [searchedList, setSearchedList] = useState(productList);
  const [status, setStatus] = useState(0);
  const [menuTypeTitle] = useState([
    "Katalog Menü", //0
    "Liste Menü", //1
    "En Çok Beğenilenler", //2
    "Öne Çıkanlar", //3
  ]);

  useEffect(() => {
    setSearchedList(productList);
  }, [searchMenu]);

  const handleSearch = (e) => {
    setSearchedList(
      productList.filter((p) =>
        p.title
          .toLocaleLowerCase("tr")
          .includes(e.target.value.toLocaleLowerCase("tr"))
      )
    );
  };

  const handleFocus = () => {
    setTimeout(() => {
      searchRef.current.focus();
    }, 200);
  };

  return (
    <>
      <section className="menu-container">
        <div className={`menu-type ${switchOnOff ? "" : "mp-dark"}`.trimEnd()}>
          <div className="menu-type-title">
            {
              /* Katalog Menu */
              isMenu && status === 0
                ? searchMenu
                  ? menuTypeTitle[status] + " (" + searchedList.length + ")"
                  : menuTypeTitle[status] + " (" + productList.length + ")"
                : isMenu && status === 2
                ? searchMenu
                  ? menuTypeTitle[0] +
                    " - " +
                    menuTypeTitle[status] +
                    " (" +
                    searchedList.filter((p) => p.fav === true).length +
                    ")"
                  : menuTypeTitle[0] +
                    " - " +
                    menuTypeTitle[status] +
                    " (" +
                    productList.filter((p) => p.fav === true).length +
                    ")"
                : isMenu && status === 3
                ? searchMenu
                  ? menuTypeTitle[0] +
                    " - " +
                    menuTypeTitle[status] +
                    " (" +
                    searchedList.filter((p) => p.rated === true).length +
                    ")"
                  : menuTypeTitle[0] +
                    " - " +
                    menuTypeTitle[status] +
                    " (" +
                    productList.filter((p) => p.rated === true).length +
                    ")"
                : /* Liste Menu */
                !isMenu && status === 1
                ? searchMenu
                  ? menuTypeTitle[status] + " (" + searchedList.length + ")"
                  : menuTypeTitle[status] + " (" + productList.length + ")"
                : !isMenu && status === 2
                ? searchMenu
                  ? menuTypeTitle[1] +
                    " - " +
                    menuTypeTitle[status] +
                    " (" +
                    searchedList.filter((p) => p.fav === true).length +
                    ")"
                  : menuTypeTitle[1] +
                    " - " +
                    menuTypeTitle[status] +
                    " (" +
                    productList.filter((p) => p.fav === true).length +
                    ")"
                : !isMenu && status === 3
                ? searchMenu
                  ? menuTypeTitle[1] +
                    " - " +
                    menuTypeTitle[status] +
                    " (" +
                    searchedList.filter((p) => p.rated === true).length +
                    ")"
                  : menuTypeTitle[1] +
                    " - " +
                    menuTypeTitle[status] +
                    " (" +
                    productList.filter((p) => p.rated === true).length +
                    ")"
                : null
            }
          </div>

          {searchMenu && (
            <motion.div
              className="menu-search-container"
              variants={searchVariants}
              initial="hidden"
              animate="visible"
            >
              <input
                ref={searchRef}
                className={`menu-search ${
                  switchOnOff ? "" : "mp-dark"
                }`.trimEnd()}
                type="text"
                placeholder="Menüde Ara..."
                onChange={(e) => handleSearch(e)}
                maxLength={30}
              />
              <img
                className="menu-search-close"
                src={menu_search_close}
                alt="menu_search_close"
                onClick={() => {
                  setSearchMenu(false);
                  isMenu
                    ? document
                        .querySelector(".galery-menu")
                        .classList.remove("m-responsive")
                    : document
                        .querySelector(".lm-container")
                        .classList.remove("m-responsive");
                }}
              />
              <img
                className="menu-search-magnifying"
                src={menu_search_magnifying}
                alt="menu_search_magnifying"
              />
            </motion.div>
          )}

          <div className="menu-type-img">
            <div className="menu-search-div">
              <img
                src={switchOnOff ? search : searchdark}
                alt="search-bar"
                onClick={() => {
                  setSearchMenu(true);
                  handleFocus();
                  isMenu
                    ? document
                        .querySelector(".galery-menu")
                        .classList.add("m-responsive")
                    : document
                        .querySelector(".lm-container")
                        .classList.add("m-responsive");
                }}
              />
            </div>
            <div className="menu-love-div">
              <img
                src={switchOnOff ? love : lovedark}
                alt="love-menu"
                onClick={() => {
                  setStatus(2);
                }}
              />
            </div>

            <div className="menu-rated-div">
              <img
                src={switchOnOff ? rated : rateddark}
                alt="rated-menu"
                onClick={() => {
                  setStatus(3);
                }}
              />
            </div>

            <div className="menu-catalog-div">
              <img
                src={switchOnOff ? catalog : catalogdark}
                alt="galeri-menu"
                onClick={() => {
                  setIsMenu(true);
                  setStatus(0);
                  searchMenu &&
                    setTimeout(() => {
                      document
                        .querySelector(".galery-menu")
                        .classList.add("m-responsive");
                    }, 5);
                }}
              />
            </div>

            <div className="menu-list-div">
              <img
                src={switchOnOff ? mlist : mlistdark}
                alt="liste-menu"
                onClick={() => {
                  setIsMenu(false);
                  setStatus(1);
                  searchMenu &&
                    setTimeout(() => {
                      document
                        .querySelector(".lm-container")
                        .classList.add("m-responsive");
                    }, 5);
                }}
              />
            </div>
          </div>
        </div>
        <motion.div
          variants={menuPageVariants}
          initial="hidden"
          animate="visible"
        >
          {isMenu && status === 0 ? (
            <div className="galery-menu">
              {(searchMenu &&
                searchedList?.map((product) => (
                  <GaleryMenuCard product={product} key={product.id} />
                ))) ||
                productList.map((product) => (
                  <GaleryMenuCard product={product} key={product.id} />
                ))}
            </div>
          ) : isMenu && status === 2 ? (
            <div className="galery-menu">
              {(searchMenu &&
                searchedList
                  ?.filter((p) => p.fav === true)
                  .map((product) => (
                    <GaleryMenuCard product={product} key={product.id} />
                  ))) ||
                productList
                  .filter((p) => p.fav === true)
                  .map((product) => (
                    <GaleryMenuCard product={product} key={product.id} />
                  ))}
            </div>
          ) : isMenu && status === 3 ? (
            <div className="galery-menu">
              {(searchMenu &&
                searchedList
                  ?.filter((p) => p.rated === true)
                  .map((product) => (
                    <GaleryMenuCard product={product} key={product.id} />
                  ))) ||
                productList
                  .filter((p) => p.rated === true)
                  .map((product) => (
                    <GaleryMenuCard product={product} key={product.id} />
                  ))}
            </div>
          ) : !isMenu && status === 1 ? (
            <div className="list-menu">
              <ul className="lm-container">
                {(searchMenu &&
                  searchedList?.map((product) => (
                    <ListMenuCard product={product} key={product.id} />
                  ))) ||
                  productList.map((product) => (
                    <ListMenuCard product={product} key={product.id} />
                  ))}
              </ul>
            </div>
          ) : !isMenu && status === 2 ? (
            <div className="list-menu">
              <ul className="lm-container">
                {(searchMenu &&
                  searchedList
                    ?.filter((p) => p.fav === true)
                    .map((product) => (
                      <ListMenuCard product={product} key={product.id} />
                    ))) ||
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
                {(searchMenu &&
                  searchedList
                    ?.filter((p) => p.rated === true)
                    .map((product) => (
                      <ListMenuCard product={product} key={product.id} />
                    ))) ||
                  productList
                    .filter((p) => p.rated === true)
                    .map((product) => (
                      <ListMenuCard product={product} key={product.id} />
                    ))}
              </ul>
            </div>
          ) : null}
        </motion.div>
      </section>
    </>
  );
};

export default MenuPage;
