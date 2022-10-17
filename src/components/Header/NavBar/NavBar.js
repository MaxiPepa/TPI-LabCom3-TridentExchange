import "./NavBar.css";

import { useAuth } from "../../Contexts/AuthContext";
import { useTheme } from "../../Contexts/ThemeContext";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { userInfo, logout } = useAuth();
  const { themeValue } = useTheme();

  const logOutButtonHandler = async () => {
    await logout();
  };

  return (
    <header className={themeValue}>
      <nav>
        <section>
          <NavLink to="./categorias">
            <img
              src="/img/trident-exchange-logo.png"
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
