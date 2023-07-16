import React from "react";
import chef from "../assets/icons/ico_general/chef.png";
import { motion } from "framer-motion";
import ToolTip from "./ToolTip";

const MasterChefVariants = {
  animate: {
    y: [0, -30],
    transition: {
      y: {
        repeat: Infinity,
        duration: 1,
        ease: "easeOut",
      },
    },
  },
  hover: {
    y: 0,
  },
};

const MasterChef = () => {
  const goToTheTopOfPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.div
        className="hp-chef-div"
        variants={MasterChefVariants}
        animate="animate"
        whileHover="hover"
      >
        <img
          className="hp-chef"
          src={chef}
          alt="master-chef"
          onClick={goToTheTopOfPage}
        />
        <ToolTip />
      </motion.div>
    </>
  );
};

export default MasterChef;
