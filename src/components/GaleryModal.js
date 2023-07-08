import React from "react";
import { Modal } from "antd";
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
    >
      <img
        src={sude}
        alt="sude-resimler"
        style={{ width: "100%", height: "100%" }}
      />
    </Modal>
  );
};

export default GaleryModal;
