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
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const { insertData } = useDatabase();
  const { themeValue } = useTheme();

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const onBlurTitleHandler = () => {
    if (title === "") {
      setErrors({ ...errors, title: "Campo obligatorio." });
    } else {
      let _errors = { ...errors };
      delete _errors.title;
      setErrors(_errors);
    }
  };

  const onBlurDescriptionHandler = () => {
    if (description === "") {
      setErrors({ ...errors, description: "Campo obligatorio." });
    } else {
      let _errors = { ...errors };
      delete _errors.description;
      setErrors(_errors);
    }
  };

  const onBlurPhotoHandler = () => {
    if (photoLink === "") {
      setErrors({ ...errors, photoLink: "Campo obligatorio." });
    } else {
      let _errors = { ...errors };
      delete _errors.photoLink;
      setErrors(_errors);
    }
  };

  const onBlurPreferenceHandler = () => {
    if (preference === "") {
      setErrors({ ...errors, preference: "Campo obligatorio." });
    } else {
      let _errors = { ...errors };
      delete _errors.preference;
      setErrors(_errors);
    }
  };

  const onBlurContactHandler = () => {
    if (contact === "") {
      setErrors({ ...errors, contact: "Campo obligatorio." });
    } else {
      let _errors = { ...errors };
      delete _errors.contact;
      setErrors(_errors);
    }
  };

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
    if (
      title === "" ||
      description === "" ||
      photoLink === "" ||
      preference === "" ||
      contact === "" ||
      Object.keys(errors).length !== 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hay errores en los campos.",
      });
    } else {
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
    }
  };

  return (
    <form id="new-offer-form" className={themeValue + " new-offer-form"}>
      <label htmlFor="title">Título:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={changeTitleHandler}
        onBlur={onBlurTitleHandler}
      />
      {errors.title && <div className="error">{errors.title}</div>}
      <label htmlFor="description">Descripción:</label>
      <textarea
        id="description"
        rows="15"
        value={description}
        onChange={changeDescriptionHandler}
        onBlur={onBlurDescriptionHandler}
      />
      {errors.description && <div className="error">{errors.description}</div>}
      <label htmlFor="photo">Link de la foto:</label>
      <input
        id="photo"
        type="text"
        value={photoLink}
        onChange={changePhotoLinkHandler}
        onBlur={onBlurPhotoHandler}
      />
      {errors.photoLink && <div className="error">{errors.photoLink}</div>}
      <label htmlFor="item">Item de preferencia:</label>
      <input
        id="item"
        type="text"
        value={preference}
        onChange={changePreferenceHandler}
        onBlur={onBlurPreferenceHandler}
      />
      {errors.preference && <div className="error">{errors.preference}</div>}
      <label htmlFor="contact">Número o Email de contacto:</label>
      <input
        id="contact"
        type="text"
        value={contact}
        onChange={changeContactHandler}
        onBlur={onBlurContactHandler}
      />
      {errors.contact && <div className="error">{errors.contact}</div>}
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
