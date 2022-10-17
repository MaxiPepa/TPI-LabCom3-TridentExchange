import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("No hay un theme provider");
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [themeValue, setThemeValue] = useState("ligth");

  const changeThemeHandler = (event) => {
    setThemeValue(event);
  };

  return (
    <ThemeContext.Provider value={{ themeValue, changeThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
