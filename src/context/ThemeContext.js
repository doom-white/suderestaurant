import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [switchOnOff, setSwitchOnOff] = useState(true);

  const data = {
    switchOnOff,
    setSwitchOnOff,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
