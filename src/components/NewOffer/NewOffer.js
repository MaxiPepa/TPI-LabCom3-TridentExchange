import "./NewOffer.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const NewOffer = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <form className="new-offer-form">
      <label htmlFor="title">Título:</label>
      <input id="title" type="text" />
      <label htmlFor="description">Description:</label>
      <textarea id="description" rows="15"/>
      <label htmlFor="photo">Link de la foto:</label>
      <input id="photo" type="text" />
      <label htmlFor="item">Item de preferencia:</label>
      <input id="item" type="text" />
      <label htmlFor="contact">Número o Email de contacto:</label>
      <input id="contact" type="text" />
      <button type="button">Ingresar oferta</button>
    </form>
  );
};

export default NewOffer;
