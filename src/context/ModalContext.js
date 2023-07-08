import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = {
    isModalOpen,
    setIsModalOpen,
    showModal,
    handleOk,
    handleCancel,
  };
  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
