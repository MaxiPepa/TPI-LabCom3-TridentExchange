import { useEffect, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

import "./SignIn.css";

const SignIn = () => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login, userInfo } = useAuth();

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
        user: "Debe ingresar un usuario valido",
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
        password: "La contraseña debe tener al menos 6 caracteres",
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

  const loginButtonHandler = async () => {
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
        await login(enteredUser, enteredPassword);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "El email ingresado no esta vinculado a ninguna cuenta.",
            });
            break;
          case "auth/wrong-password":
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "La contraseña ingresada no es correcta.",
            });
            break;
          default:
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Ha ocurrido un error inesperado con el inicio de sesión.",
            });
            break;
        }
      }
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <div className="sign-in">
        <label htmlFor="user">Usuario:</label>
        <input
          type="text"
          id="user"
          onChange={changeUserHandler}
          onBlur={onUserInputBlur}
        />
        {errors.user && <div className="error">{errors.user}</div>}
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          onChange={changePasswordHandler}
          onBlur={onPasswordInputBlur}
        />
        {errors.password && <div className="error">{errors.password}</div>}
        <div className="button_sign-in">
          <button type="button" onClick={loginButtonHandler}>
            Iniciar Sesión
          </button>
          <NavLink to="/register-form">Registrarse</NavLink>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
