import React from "react";
import CarouselMain from "../components/CarouselMain";
import ProductCard from "../components/ProductCard";
import MenuCard from "../components/MenuCard";
import { motion } from "framer-motion";

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
    </>
  );
};

export default HomePage;
