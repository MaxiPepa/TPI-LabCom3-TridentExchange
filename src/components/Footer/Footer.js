import "./Footer.css";

import { useTheme } from "../Contexts/ThemeContext";

const Footer = () => {
  const { themeValue } = useTheme();
  return (
    <footer className={themeValue}>
        <p>Desarrollado con React - Máximo Pepa, Gastón Bortoli, Milton Miralles</p>
        <a href="https://www.google.com"  rel="noreferrer" target="_blank">Contáctate con el soporte</a>
    </footer>
  );
};

export default Footer;