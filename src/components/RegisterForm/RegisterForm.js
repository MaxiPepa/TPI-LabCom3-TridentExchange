import "./RegisterForm.css";

import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/AuthContext";
import Swal from "sweetalert2";
import { useNavigate, NavLink } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";

const RegisterForm = () => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { register, userInfo } = useAuth();
  const { themeValue } = useTheme();

  useEffect(() => {
    if (userInfo != null) {
      navigate("/categorias");
    }
  }, [userInfo, navigate]);

  const onUserInputBlur = () => {
    if (enteredUser === "") {
      setErrors({ ...errors, user: "Campo obligatorio." });
    } else if (!validateEmail(enteredUser)) {
      setErrors({
        ...errors,
        user: "Debe ingresar un EMAIL valido",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.user;
      setErrors(_errors);
    }
  };

  const onPasswordInputBlur = () => {
    if (enteredPassword === "") {
      setErrors({ ...errors, password: "Campo obligatorio." });
    } else if (enteredPassword.length < 6) {
      setErrors({
        ...errors,
        password: "La contraseña no cumple los requisitos.",
      });
    } else {
      let _errors = { ...errors };
      delete _errors.password;
      setErrors(_errors);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+.\S+/;
    return re.test(email);
  };

  const changeUserHandler = (event) => {
    setEnteredUser(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const registerButtonHandler = async () => {
    if (
      enteredUser === "" ||
      enteredPassword === "" ||
      Object.keys(errors).length !== 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hay errores en los campos.",
      });
    } else {
      try {
        await register(enteredUser, enteredPassword);
        navigate("/categorias");
      } catch {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "El email ingresado ya está vinculado a una cuenta.",
        });
      }
    }
  };

  return (
    <div className={"register-container-color-" + themeValue}>
      <h1>Formulario de registro:</h1>
      <form className={"register-form register-form-color-" + themeValue}>
        <label htmlFor="user">Email:</label>
        <input
          type="text"
          id="user"
          onChange={changeUserHandler}
          onBlur={onUserInputBlur}
        ></input>
        {errors.user && <div className="error">{errors.user}</div>}
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          onChange={changePasswordHandler}
          onBlur={onPasswordInputBlur}
        ></input>
        {errors.password && <div className="error">{errors.password}</div>}
        <span>La contraseña debe tener al menos 6 caracteres</span>
        <div className={"buttons-register buttons-register-color-" + themeValue}>
          <button type="button" onClick={registerButtonHandler}>
            Registrarse
          </button>
          <NavLink to="/login">Volver</NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
