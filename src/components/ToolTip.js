import React from "react";
import speech from "../assets/icons/ico_general/speech-bubble.png";

const ToolTip = ({ isBottom }) => {
  return (
    <div
      className={`tooltip-container ${(isBottom && "atBottom") || ""}`.trim()}
    >
      <p>Başa dön...</p>
      <img src={speech} alt="speech" />
    </div>
  );
};

export default ToolTip;
