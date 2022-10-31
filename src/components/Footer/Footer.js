import "./Footer.css";

import { useTheme } from "../Contexts/ThemeContext";

const Footer = () => {
  const { themeValue } = useTheme();
  return (
    <footer className={themeValue}>
      <p>Desarrollado con React</p>
      <div className="git-buttons">
        <a className="git-link" href="https://github.com/MaxiPepa" target="_blank" rel="noreferrer">
          <i class="bi bi-github"></i> Máximo Pepa
        </a>
        <a className="git-link" href="https://github.com/Bortoli94" target="_blank" rel="noreferrer">
          <i class="bi bi-github"></i> Gastón Bortoli
        </a>
      </div>
    </footer>
  );
};

export default Footer;
