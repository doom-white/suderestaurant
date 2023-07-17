import React from "react";
import speech from "../assets/icons/ico_general/speech-bubble.png";
import speechDark from "../assets/icons/ico_general/speech-bubble-dark.png";
import { useTheme } from "../context/ThemeContext";

const ToolTip = () => {
  const { switchOnOff } = useTheme();
  return (
    <div className="tooltip-container">
      <p className={`ttp-text ${switchOnOff ? "" : "ttp-dark"}`.trimEnd()}>
        Başa dön...
      </p>
      <img src={switchOnOff ? speech : speechDark} alt="speech" />
    </div>
  );
};

export default ToolTip;
