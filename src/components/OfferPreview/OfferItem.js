import "./OfferItem.css";

import { useAuth } from "../Contexts/AuthContext";
import { useDatabase } from "../Contexts/DatabaseContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../Contexts/ThemeContext";

const OfferItem = ({ offerList }) => {
  const { userInfo } = useAuth();
  const { removeData, selectData } = useDatabase();
  const [adminList, setAdminList] = useState();
  const { themeValue } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const getAdmins = async () => {
      setAdminList(await selectData("administrators"));
    };
    getAdmins();
  }, [selectData]);

  const deleteOfferHandler = async (category, offerId, offerUID, actualUID) => {
    if (offerUID === actualUID || adminList.includes(userInfo.uid)) {
      Swal.fire({
        title: "¿Estás seguro que quieres borrar la publicación?",
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: `No`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          await removeData(category, offerId);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Publicación borrada con éxito",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/categorias");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Eliminado denegado",
        text: "¡No puedes eliminar una publicación que no es tuya!",
      });
    }
  };

  const offers = offerList.map((offer) => {
    return (
      <div className="offer-item">
        <div className="img-card">
          <img src={offer.photoLink} alt="Foto de la oferta" />
        </div>
        <div className={"content-card content-card-color-" + themeValue}>
          <h2>{offer.title}</h2>
          <p>{offer.description}</p>
          <h4>Cambio por:</h4>
          <p>{offer.preferredItem}</p>
          <h4>Contacto:</h4>
          <p>{offer.contact}</p>
        </div>
        <button
          className={"trash-color-" + themeValue}
          type="button"
          onClick={() => {
            deleteOfferHandler(
              offer.category,
              offer.id,
              offer.userId,
              userInfo.uid
            );
          }}
        >
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    );
  });

  return <div className="offer-container">{offers}</div>;
};

export default OfferItem;
