import React from "react";
import kurye from "../assets/icons/ico_general/food-delivery.png";
import kuryed from "../assets/icons/ico_general/food-deliveryd.png";
import { useModal } from "../context/ModalContext";
import { useTheme } from "../context/ThemeContext";

const OrderModalButton = () => {
  const { showModal } = useModal();
  const { switchOnOff } = useTheme();

  return (
    <div
      className={`order-modal-button-container ${
        switchOnOff ? "" : "om-dark"
      }`.trimEnd()}
    >
      <img
        src={switchOnOff ? kurye : kuryed}
        alt="motor_kurye"
        onClick={showModal}
      />
    </div>
  );
};

export default OrderModalButton;
