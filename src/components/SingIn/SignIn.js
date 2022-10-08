import { useState } from "react";

import { NavLink } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

import "./SignIn.css";

const SignIn = () => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { login } = useAuth();

  const onUserInputBlur = (event) => {
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

  const onPasswordInputBlur = (event) => {
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

  const loginButtonHandler = () => {
    if (
      enteredUser === "" ||
      enteredPassword === "" ||
      Object.keys(errors).length !== 0
    ) {
      alert("Hay errores en los campos");
    } else {
      login(enteredUser, enteredPassword);
    }
  };


  return (
    <>
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
          <button type="button" onClick={loginButtonHandler}>Iniciar Sesión</button>
          <NavLink to="/register-form">Registrarse</NavLink>
        </div>
      </div>
    </>
  );
};

export default SignIn;
