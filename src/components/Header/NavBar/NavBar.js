import "./NavBar.css";

import { useAuth } from "../../Contexts/AuthContext";

const NavBar = () => {
  const { userInfo, logout } = useAuth();

  const logOutButtonHandler = async () => {
    await logout();
  };

  return (
    <header>
      <nav>
        <img src="/img/trident-exchange-logo.png" alt="Trident Exchange Logo" />

        {userInfo != null && (
          <div className="singed-in-user">
            <p>Bienvenido, {userInfo.email}</p>
            <button type="button">Configuración</button>
            <button type="button" onClick={logOutButtonHandler}>
              Desconectarse
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
