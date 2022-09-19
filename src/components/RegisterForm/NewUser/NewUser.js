import { useState } from "react";

import "./NewUser.css"

import RegisterForm from "../RegisterForm/RegisterForm";

const NewUser = () => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  return (
    <div className="register-content">
      {showForm ? (
        <RegisterForm />
      ) : (
        <div className="new-user-button">
          <h1>¿No tenés una cuenta?</h1>
          <button
            onClick={showFormHandler}
            type="button"
          >
            ¡Regístrate!
          </button>
        </div>
      )}
    </div>
  );
};

export default NewUser;
