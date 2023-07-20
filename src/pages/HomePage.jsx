import React, { useEffect } from "react";
import CarouselMain from "../components/CarouselMain";
import ProductCard from "../components/ProductCard";
import MenuCard from "../components/MenuCard";
import { motion } from "framer-motion";
import { useModal } from "../context/ModalContext";
import OrderModal from "../components/OrderModal";
import { useState } from "react";

const homePageVariants = {
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

const HomePage = ({ screenSize }) => {
  const [orderModalStatus] = useState(
    JSON.parse(localStorage.getItem("order") || true)
  );
  const { showModal } = useModal();

  useEffect(() => {
    if (orderModalStatus) {
      showModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <motion.div
        className="hp-container"
        variants={homePageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hp-con-pro-card">
          <div className="hp-carousel">
            <CarouselMain />
          </div>
          <ProductCard screenSize={screenSize} />
        </div>
        <div className="hp-con-menu-card">
          <MenuCard screenSize={screenSize} />
        </div>
      </motion.div>
      <OrderModal />
    </>
  );
};

export default HomePage;
