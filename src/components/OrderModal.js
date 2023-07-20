import React from "react";
import { Modal } from "antd";
import { useModal } from "../context/ModalContext";
import { useTheme } from "../context/ThemeContext";
import kurye from "../assets/order-modal/kurye.png";
import kuryed from "../assets/order-modal/kuryed.png";
import dugun from "../assets/order-modal/dugun.png";
import dugund from "../assets/order-modal/dugund.png";

const OrderModal = () => {
  const { isModalOpen, handleOk, handleCancel } = useModal();
  const { switchOnOff } = useTheme();

  const handleModalStatus = (e) => {
    if (e.target.checked) {
      localStorage.setItem("order", false);
    } else {
      localStorage.setItem("order", true);
    }
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={"50rem"}
      className={`gp-modal ${switchOnOff ? "" : "gp-dark"}`.trimEnd()}
      closable={true}
      footer={null}
      title="Sude Restaurant & Cafe"
      destroyOnClose={true}
    >
      <div
        className={`order-container ${
          switchOnOff ? "" : "order-dark"
        }`.trimEnd()}
      >
        <div className="kurye-container">
          <img
            className="kurye"
            src={switchOnOff ? kurye : kuryed}
            alt="kurye"
          />
          <div className="kurye-text-container">
            <p
              className={`kurye-text ${
                switchOnOff ? "" : "order-dark"
              }`.trimEnd()}
            >
              Dilerseniz Whatsapp ya da Sipariş hattımızdan siparişlerinizi
              kolaylıkla verebilirsiniz.
            </p>
          </div>
        </div>
        <div className="dugun-container">
          <div className="dugun-text-container">
            <p
              className={`dugun-text ${
                switchOnOff ? "" : "order-dark"
              }`.trimEnd()}
            >
              Her türlü düğün ve cemiyetlerinizde özel sipariş verebilirsiniz.
            </p>
          </div>
          <img
            className="dugun"
            src={switchOnOff ? dugun : dugund}
            alt="dugun"
          />
        </div>
        <div className="order-footer">
          <p
            className={`order-footer-whatsapp-text ${
              switchOnOff ? "" : "order-dark"
            }`.trimEnd()}
          >
            Whatsapp Hattı: +90 538 678 7678
          </p>
          <p
            className={`order-footer-siparis-text ${
              switchOnOff ? "" : "order-dark"
            }`.trimEnd()}
          >
            Sipariş Hattı: +90 228 212 2424
          </p>
        </div>
        <div
          className={`order-status-container ${
            switchOnOff ? "" : "order-dark"
          }`.trimEnd()}
        >
          <input
            type="checkbox"
            name="orderStatus"
            id="order-status"
            onChange={handleModalStatus}
          />
          <label htmlFor="order-status">Her zaman gösterme.</label>
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;
