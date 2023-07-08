import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const data = {
    modalIsOpen,
    setIsOpen,
  };
  return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
