import "./NewOffer.css";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useDatabase } from "../Contexts/DatabaseContext";
import { useTheme } from "../Contexts/ThemeContext";
import Swal from "sweetalert2";

const NewOffer = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [photoLink, setPhotoLink] = useState("");
  const [preference, setPreference] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("appliance");
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const { insertData } = useDatabase();
  const { themeValue } = useTheme();

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

  const submitOfferHandler = async () => {
    const offerId = Math.random().toString(36).slice(2, 18);
    const offerData = {
      photoLink: photoLink,
      title: title,
      description: description,
      preferredItem: preference,
      contact: contact,
      userId: userInfo.uid,
    };

    await insertData(category, offerId, offerData);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Oferta publicada con éxito",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/categorias");
  };

  return (
    <form id="new-offer-form" className={themeValue + " new-offer-form"}>
      <label htmlFor="title">Título:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={changeTitleHandler}
      />
      <label htmlFor="description">Descripción:</label>
      <textarea
        id="description"
        rows="15"
        value={description}
        onChange={changeDescriptionHandler}
      />
      <label htmlFor="photo">Link de la foto:</label>
      <input
        id="photo"
        type="text"
        value={photoLink}
        onChange={changePhotoLinkHandler}
      />
      <label htmlFor="item">Item de preferencia:</label>
      <input
        id="item"
        type="text"
        value={preference}
        onChange={changePreferenceHandler}
      />
      <label htmlFor="contact">Número o Email de contacto:</label>
      <input
        id="contact"
        type="text"
        value={contact}
        onChange={changeContactHandler}
      />
      <label htmlFor="category">Categoría:</label>
      <select id="category" value={category} onChange={changeCategoryHandler}>
        <option value="appliance">Electrodomesticos</option>
        <option value="furniture">Muebles</option>
        <option value="vehicles">Vehículos</option>
        <option value="realState">Inmuebles</option>
        <option value="garden">Jardinería</option>
        <option value="toyStore">Juguetería</option>
      </select>
      <button type="button" className={themeValue} onClick={submitOfferHandler}>
        Ingresar oferta
      </button>
    </form>
  );
};

export default NewOffer;
