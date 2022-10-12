import "./NewOffer.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

const NewOffer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [preference, setPreference] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("appliance");
  const navigate = useNavigate();
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };

  const changePhotoLinkHandler = (event) => {
    setPhotoLink(event.target.value);
  };

  const changePreferenceHandler = (event) => {
    setPreference(event.target.value);
  };

  const changeContactHandler = (event) => {
    setContact(event.target.value);
  };

  const changeCategoryHandler = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form className="new-offer-form">
      <label htmlFor="title">Título:</label>
      <input id="title" type="text" value={title} onChange={changeTitleHandler}/>
      <label htmlFor="description">Description:</label>
      <textarea id="description" rows="15" value={description} onChange={changeDescriptionHandler}/>
      <label htmlFor="photo">Link de la foto:</label>
      <input id="photo" type="text" value={photoLink} onChange={changePhotoLinkHandler}/>
      <label htmlFor="item">Item de preferencia:</label>
      <input id="item" type="text" value={preference} onChange={changePreferenceHandler}/>
      <label htmlFor="contact">Número o Email de contacto:</label>
      <input id="contact" type="text" value={contact} onChange={changeContactHandler}/>
      <label htmlFor="category">Categoría:</label>
      <select id="category" value={category} onChange={changeCategoryHandler}>
        <option value="appliance">Electrodomesticos</option>
        <option value="furniture">Muebles</option>
        <option value="vehicles">Vehículos</option>
        <option value="realState">Inmuebles</option>
        <option value="garden">Jardinería</option>
        <option value="toyStore">Juguetería</option>
      </select>
      <button type="button">Ingresar oferta</button>
    </form>
  );
};

export default NewOffer;
