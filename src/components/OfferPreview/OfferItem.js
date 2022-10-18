import "./OfferItem.css";

import { useAuth } from "../Contexts/AuthContext";
import { useDatabase } from "../Contexts/DatabaseContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const OfferItem = ({ offerList }) => {
  const { userInfo } = useAuth();
  const { removeData } = useDatabase();
  const navigate = useNavigate();

  const deleteOfferHandler = async (category, offerId, offerUID, actualUID) => {
    if (offerUID === actualUID) {
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
          navigate("/categorias")
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
      <div className="offer-card">
        <img src={offer.photoLink} alt="Foto de la oferta" />
        <h2>{offer.title}</h2>
        <p>{offer.description}</p>
        <p>{offer.preferredItem}</p>
        <p>{offer.contact}</p>
        <button
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

  return <div>{offers}</div>;
};

export default OfferItem;
