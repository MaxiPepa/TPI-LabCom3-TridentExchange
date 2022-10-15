import "./Configuration.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Configuration = () => {
  const [themeValue, setThemeValue] = useState("light");
  const [newPassword, setNewPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const changeThemeHandler = (event) => {
    setThemeValue(event.target.value);
  };

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

  const confirmButtonHandler = () => {
    if (newPassword === "" || Object.keys(errors).length !== 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hay errores en los campos.",
      });
    } else {
      console.log("cambia contra");
    }
  };

  return (
    <>
      <h1>Configuración</h1>
      <div className="configuration-menu">
        <h2>Tema</h2>
        <div className="theme-switcher">
          <input
            type="radio"
            id="light-theme"
            name="themes"
            value="light"
            checked={themeValue === "light" ? true : false}
            onChange={changeThemeHandler}
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
            onChange={changeThemeHandler}
          />
          <label htmlFor="dark-theme">
            <span>
              <i className="bi bi-moon-fill"></i> Dark
            </span>
          </label>
          <span className="slider"></span>
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
          className="change-password"
          onClick={confirmButtonHandler}
          type="button"
        >
          Confirmar
        </button>
      </div>
    </>
  );
};

export default Configuration;
