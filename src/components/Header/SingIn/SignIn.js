import "./SignIn.css"

const SignIn = () => {
    return (
        <div className="sign-in">
            <label for="user">Usuario: </label>
            <input type="text" />
            <label for="password">Contraseña: </label>
            <input type="text" />
        </div>
    );
}

export default SignIn