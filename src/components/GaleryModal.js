import React from "react";
import { Modal } from "antd";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useModal } from "../context/ModalContext";

const GaleryModal = ({ sude }) => {
  const { isModalOpen, handleOk, handleCancel } = useModal();

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      width={"60rem"}
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
          <SplideSlide>
            <img
              src={s.res}
              alt="sude-resimler"
              style={{ width: "100%", height: "40rem" }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </Modal>
  );
};

export default GaleryModal;
