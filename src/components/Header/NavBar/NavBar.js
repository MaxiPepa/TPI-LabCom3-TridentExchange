import "./NavBar.css";

import { useAuth } from "../../Contexts/AuthContext";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { userInfo, logout } = useAuth();

  const logOutButtonHandler = async () => {
    await logout();
  };

  return (
    <header>
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
          <div className="singed-in-user">
            <p>BIENVENIDO {userInfo.email}</p>
            <section className="button-singed-in-user">
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
