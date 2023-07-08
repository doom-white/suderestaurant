import React from "react";
import Modal from "react-modal";
import { useModal } from "../context/ModalContext";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const GaleryModal = ({ imgURL }) => {
  const { modalIsOpen, setIsOpen } = useModal();

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <img
          src={imgURL}
          alt="resim"
          style={{ width: "60rem", height: "40rem" }}
        />
      </Modal>
    </div>
  );
};

export default GaleryModal;
