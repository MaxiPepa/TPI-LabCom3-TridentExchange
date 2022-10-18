import "./Configuration.css";

import { useNavigate } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";
import { useAuth } from "../Contexts/AuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Configuration = () => {
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { userInfo, changeAccountPassword, eliminateUser } = useAuth();
  const { themeValue, changeThemeHandler } = useTheme();

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const changePasswordHandler = (event) => {
    setNewPassword(event.target.value);
  };

  const onPasswordInputBlur = () => {
    if (newPassword === "") {
      setErrors({ ...errors, password: "Campo obligatorio." });
    } else if (newPassword.length < 6) {
      setErrors({
        ...errors,
        password: "La contraseña debe tener al menos 6 caracteres",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.password;
      setErrors(_errors);
    }
  };

  const confirmButtonHandler = async () => {
    if (newPassword === "" || Object.keys(errors).length !== 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hay errores en los campos.",
      });
    } else {
      try {
        Swal.fire({
          title: "¿Estás seguro que quieres cambiar la contraseña?",
          showDenyButton: true,
          confirmButtonText: "Sí",
          denyButtonText: `No`,
        }).then(async (result) => {
          if (result.isConfirmed) {
            await changeAccountPassword(newPassword);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Su contraseña ha sido cambiada correctamente",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      } catch {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error inesperado en el cambio de contraseña",
        });
      }
    }
  };

  const deleteUserHandler = async () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Una vez eliminado, tendrás que crear un usuario nuevo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrar permanentemente",
      cancelButtonText: "No, quiero quedarme",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await eliminateUser();
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Gracias por quedarse con nosotros",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <>
      <h1 className={themeValue}>Configuración</h1>
      <div
        className={"configuration-menu " + themeValue}
        id="configuration-menu"
      >
        <h2>Tema</h2>
        <div className={"theme-switcher " + themeValue} id="theme-container">
          <input
            type="radio"
            id="light-theme"
            name="themes"
            value="light"
            checked={themeValue === "light" ? true : false}
            onChange={(event) => changeThemeHandler(event.target.value)}
          />
          <label htmlFor="light-theme">
            <span>
              <i className="bi bi-brightness-high"></i> Light
            </span>
          </label>
          <input
            type="radio"
            id="dark-theme"
            name="themes"
            value="dark"
            checked={themeValue === "dark" ? true : false}
            onChange={(event) => changeThemeHandler(event.target.value)}
          />
          <label htmlFor="dark-theme">
            <span>
              <i className="bi bi-moon-fill"></i> Dark
            </span>
          </label>
          <span className={"slider " + themeValue} id="themeSlider"></span>
        </div>
        <h2>Cambiar contraseña</h2>
        <input
          id="new-password"
          type="password"
          value={newPassword}
          onChange={changePasswordHandler}
          onBlur={onPasswordInputBlur}
          placeholder="Nueva contraseña"
        />
        {errors.password && <div className="error">{errors.password}</div>}
        <button
          className={"change-password " + themeValue}
          onClick={confirmButtonHandler}
          type="button"
        >
          Confirmar
        </button>
        <button
          className="delete-user-button"
          type="button"
          onClick={deleteUserHandler}
        >
          Eliminar usuario
        </button>
      </div>
    </>
  );
};

export default Configuration;
