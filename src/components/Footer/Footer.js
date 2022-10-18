import "./Footer.css";

import { useTheme } from "../Contexts/ThemeContext";

const Footer = () => {
  const { themeValue } = useTheme();
  return (
    <footer className={themeValue}>
        <p>Desarrollado con React - Máximo Pepa, Gastón Bortoli, Milton Miralles</p>
    </footer>
  );
};

export default Footer;