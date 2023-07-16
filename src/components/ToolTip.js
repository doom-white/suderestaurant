import React from "react";
import speech from "../assets/icons/ico_general/speech-bubble.png";
import speechDark from "../assets/icons/ico_general/speech-bubble-dark.png";
import { useTheme } from "../context/ThemeContext";
const ToolTip = ({ isBottom }) => {
  const { switchOnOff } = useTheme();
  return (
    <div className={`tooltip-container ${isBottom ? "atBottom" : ""}`.trim()}>
      <p className={`ttp-text ${switchOnOff ? "" : "dark"}`.trimEnd()}>
        Başa dön...
      </p>
      <img src={switchOnOff ? speech : speechDark} alt="speech" />
    </div>
  );
};

export default ToolTip;
