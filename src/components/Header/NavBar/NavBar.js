import "./NavBar.css";

import { useAuth } from "../../Contexts/AuthContext";
import { useTheme } from "../../Contexts/ThemeContext";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { userInfo, logout } = useAuth();
  const { themeValue, changeThemeHandler } = useTheme();

  const logOutButtonHandler = async () => {
    await changeThemeHandler("light")
    await logout();
  };

  return (
    <header className={themeValue}>
      <nav>
        <section>
          <NavLink to="./categorias">
            <img
              src={themeValue === "light" ? "/img/trident-exchange-logo-lightMode.png" : "/img/trident-exchange-logo-darkMode.png"}
              alt="Trident Exchange Logo"
            />
          </NavLink>
        </section>
        {userInfo != null && (
          <div className={"signed-in-user " + themeValue} id="signed-in-user">
            <p>BIENVENIDO {userInfo.email}</p>
            <section className="button-signed-in-user">
              <NavLink to="/configuracion">Configuración</NavLink>
              <button type="button" onClick={logOutButtonHandler}>
                Desconectarse
              </button>
            </section>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
