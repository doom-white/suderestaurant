import { createContext, useContext, useState } from "react";

const SelectedContext = createContext();
export const useSelected = () => useContext(SelectedContext);

const SelectedProvider = ({ children }) => {
  const [selectedElement, setSelectedElement] = useState(-1);

  const data = {
    selectedElement,
    setSelectedElement,
  };
  return (
    <SelectedContext.Provider value={data}>{children}</SelectedContext.Provider>
  );
};

export default SelectedProvider;
