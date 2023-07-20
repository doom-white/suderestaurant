import React from "react";
import { Modal } from "antd";
import { useModal } from "../context/ModalContext";
import { useTheme } from "../context/ThemeContext";
import kurye from "../assets/order-modal/kurye.png";
import kuryed from "../assets/order-modal/kuryed.png";
import dugun from "../assets/order-modal/dugun.png";
import dugund from "../assets/order-modal/dugund.png";
import { useEffect } from "react";
import { useRef } from "react";

const OrderModal = () => {
  const { isModalOpen, handleOk, handleCancel } = useModal();
  const { switchOnOff } = useTheme();
  const cboxRef = useRef(null);

  const handleModalStatus = (e) => {
    if (e.target.checked) {
      localStorage.setItem("order", false);
    } else {
      localStorage.setItem("order", true);
    }
  };

  useEffect(() => {
    if (isModalOpen && !JSON.parse(localStorage.getItem("order"))) {
      setTimeout(() => {
        cboxRef.current.checked = true;
      }, 100);
    }
  }, [isModalOpen]);

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
        <div
          className={`order-footer ${
            switchOnOff ? "" : "order-dark"
          }`.trimEnd()}
        >
          <p
            className={`order-footer-whatsapp-text ${
              switchOnOff ? "" : "order-dark"
            }`.trimEnd()}
          >
            Whatsapp Hattı: <br />
            +90 538 678 7678
          </p>
          <p
            className={`order-footer-siparis-text ${
              switchOnOff ? "" : "order-dark"
            }`.trimEnd()}
          >
            Sipariş Hattı: <br /> +90 228 212 2424
          </p>
        </div>
        <div
          className={`order-status-container ${
            switchOnOff ? "" : "order-dark"
          }`.trimEnd()}
        >
          <input
            ref={cboxRef}
            type="checkbox"
            name="orderStatus"
            id="order-status"
            onChange={handleModalStatus}
          />
          <label htmlFor="order-status">Başlangıçta her zaman gösterme.</label>
        </div>
      </div>
    </Modal>
  );
};

export default OrderModal;
