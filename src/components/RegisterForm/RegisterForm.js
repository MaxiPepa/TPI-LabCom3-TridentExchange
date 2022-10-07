import "./RegisterForm.css";

import { useState } from "react";
import { useAuth } from "../Contexts/AuthContext";

const RegisterForm = () => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { register } = useAuth();

  const onUserInputBlur = (event) => {
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

  const registerButtonHandler = () => {
    if (
      enteredUser === "" ||
      enteredPassword === "" ||
      Object.keys(errors).length !== 0
    ) {
      alert("Hay errores en los campos");
    } else {
      register(enteredUser, enteredPassword);
    }
  };

  return (
    <>
      <h1>Formulario de registro:</h1>
      <form className="register-form">
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
        <button type="button" onClick={registerButtonHandler}>
          Registrarse
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
