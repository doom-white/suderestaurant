import React from "react";
import { Modal } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { useModal } from "../context/ModalContext";

const GaleryModal = ({ imgURL }) => {
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
      <img src={imgURL} alt="resim" style={{ width: "100%" }} />
    </Modal>
  );
};

export default GaleryModal;
