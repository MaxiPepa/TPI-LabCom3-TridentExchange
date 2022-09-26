import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <label for="user">Usuario:</label>
      <input type="text" id="user"/>
      <label for="password">Contraseña:</label>
      <input type="password" id="password"/>
      <div className="button_sign-in">
        <button type="button">Iniciar Sesión</button>
        <button type="button">Registrase</button>
      </div>
    </div>
  );
};

export default SignIn;
