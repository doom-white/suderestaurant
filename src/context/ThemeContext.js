import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [hideLinks, setHideLinks] = useState(false);
  const [switchOnOff, setSwitchOnOff] = useState(
    JSON.parse(localStorage.getItem("darkTheme"))
  );

  useEffect(() => {
    localStorage.setItem("darkTheme", switchOnOff);
  }, [switchOnOff]);

  const data = {
    switchOnOff,
    setSwitchOnOff,
    hideLinks,
    setHideLinks,
  };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
