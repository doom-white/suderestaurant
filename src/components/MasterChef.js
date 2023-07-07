import React from "react";
import chef from "../assets/icons/ico_general/chef.png";
import ToolTip from "../components/ToolTip";

const MasterChef = ({ isBottom }) => {
  const goToTheTopOfPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hp-chef-div">
        <img
          className="hp-chef"
          src={chef}
          alt="master-chef"
          onClick={goToTheTopOfPage}
        />
        <ToolTip isBottom={isBottom} />
      </div>
    </>
  );
};

export default MasterChef;
