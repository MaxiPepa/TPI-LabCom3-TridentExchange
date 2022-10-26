import "./NavBar.css";

import { useAuth } from "../../Contexts/AuthContext";
import { useTheme } from "../../Contexts/ThemeContext";

import { NavLink } from "react-router-dom";
import { useDatabase } from "../../Contexts/DatabaseContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const NavBar = () => {
  const { userInfo, logout } = useAuth();
  const { themeValue } = useTheme();
  const { selectData } = useDatabase();
  const [adminList, setAdminList] = useState();

  useEffect(() => {
    const getAdmins = async () => {
      setAdminList(await selectData("administrators"));
    };
    getAdmins();
  }, [selectData]);

  const logOutButtonHandler = async () => {
    await logout();
  };

  const administratorInfoButton = () => {
    Swal.fire(
      "¡Eres administrador!",
      "Eso te permite borrar publicaciones aunque no sean tuyas. Recuerda que es una función solo hecha para moderar publicaciones, se te quitaran los permisos en caso usarlos indebidamente.",
      "info"
    );
  };

  return (
    <header className={themeValue}>
      <nav>
        <section>
          <NavLink to="./categorias">
            <img
              src={
                themeValue === "light"
                  ? "/img/trident-exchange-logo-lightMode.png"
                  : "/img/trident-exchange-logo-darkMode.png"
              }
              alt="Trident Exchange Logo"
            />
          </NavLink>
        </section>
        {userInfo != null && (
          <div className={"signed-in-user " + themeValue} id="signed-in-user">
            <p>BIENVENIDO {userInfo.email}</p>
            <section className={"button-signed-in-user button-signed-in-user-color-" + themeValue}>
              <NavLink to="/configuracion">Configuración</NavLink>
              <button type="button" onClick={logOutButtonHandler}>
                Desconectarse
              </button>
              {adminList.includes(userInfo.uid) && (
                <button id="adminButton" type="button" className={"admin-button-color-" + themeValue} onClick={administratorInfoButton}>
                  Info. Admin
                </button>
              )}
            </section>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
