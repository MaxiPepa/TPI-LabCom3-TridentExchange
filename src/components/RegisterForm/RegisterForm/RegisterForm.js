import { useFirebaseApp } from "reactfire";

import "./RegisterForm.css";

const RegisterForm = () => {

  const fireBase = useFirebaseApp();

  const button = () => {
    console.log(fireBase)
  }

  return (
    <>
      <h1>Formulario de registración</h1>
      <form className="register-form">
        <label for="user">Nombre de usuario:</label>
        <input type="text" id="user"></input>
        <label for="password">Contraseña:</label>
        <input type="password" id="password"></input>
        <label for="repeat-password">Repetir contraseña:</label>
        <input type="password" id="repeat-password"></input>
        <button type="button" onClick={button}>Registrarse</button>
      </form>
    </>
  );
};

export default RegisterForm;
