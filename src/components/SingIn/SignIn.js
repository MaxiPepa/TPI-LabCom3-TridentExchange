import "./SignIn.css";
import { NavLink } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <h1>Iniciar Sesión</h1>
      <div className="sign-in">
        <label for="user">Usuario:</label>
        <input type="text" id="user" />
        <label for="password">Contraseña:</label>
        <input type="password" id="password" />
        <div className="button_sign-in">
          <button type="button">Iniciar Sesión</button>
          <NavLink to="/register-form">Registrarse</NavLink>
        </div>
      </div>
    </>
  );
};

export default SignIn;
