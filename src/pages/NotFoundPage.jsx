import React from "react";
import home from "../assets/nf404/home.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const homeNavigation = useNavigate();

  return (
    <motion.div
      className="nf-main-container"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 2,
          delay: 0.3,
          stiffness: 250,
        },
      }}
    >
      <motion.button
        className="nf-btn"
        initial={{ x: -200 }}
        animate={{
          x: 0,
          transition: {
            duration: 1,
            delay: 0.4,
            stiffness: 250,
          },
        }}
        onClick={() => homeNavigation("/")}
      >
        <img className="nf-home" src={home} alt="anasayfa" />
      </motion.button>
    </motion.div>
  );
};

export default NotFoundPage;
