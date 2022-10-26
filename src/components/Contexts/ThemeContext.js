import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("No hay un theme provider");
  return context;
};

export const ThemeProvider = ({ children }) => {
  const getThemeFromLocalStorage = () => {
    let lsColor = localStorage.getItem("theme");
    if (lsColor === null) {
      localStorage.setItem("theme", "light");
      return "light";
    } else {
      return lsColor;
    }
  };

  const [themeValue, setThemeValue] = useState(getThemeFromLocalStorage());

  const changeThemeHandler = (event) => {
    localStorage.setItem("theme", event);
    setThemeValue(event);
  };

  return (
    <ThemeContext.Provider value={{ themeValue, changeThemeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};
