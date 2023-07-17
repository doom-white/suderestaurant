import React from "react";
import { Modal } from "antd";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useModal } from "../context/ModalContext";
import { useTheme } from "../context/ThemeContext";

const GaleryModal = ({ sude }) => {
  const { isModalOpen, handleOk, handleCancel } = useModal();
  const { switchOnOff } = useTheme();

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={"60rem"}
      className={`gp-modal ${switchOnOff ? "" : "gp-dark"}`.trimEnd()}
      closable={true}
      footer={null}
      title="Sude Restaurant & Cafe"
      destroyOnClose={true}
    >
      <Splide
        options={{
          type: "fade",
          drag: "free",
          gap: "1rem",
          focus: "center",
          pagination: false,
          lazyLoad: true,
        }}
      >
        {sude.map((s) => (
          <SplideSlide key={s.id}>
            <img src={s.res} alt="sude-resimler" className="gp-modal-img" />
            <p className="modal-title">{s.desc}</p>
          </SplideSlide>
        ))}
      </Splide>
    </Modal>
  );
};

export default GaleryModal;
