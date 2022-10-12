import "./OfferItem.css";

import { useAuth } from "../Contexts/AuthContext";
import { useDatabase } from "../Contexts/DatabaseContext";

const OfferItem = ({ offerList }) => {
  const { userInfo } = useAuth();
  const { removeData } = useDatabase();

  const deleteOfferHandler = async (category, offerId, offerUID, actualUID) => {
    if (offerUID === actualUID) {
      await removeData(category, offerId);
    } else {
      alert("No puedes borrar una publicacion que no es tuya");
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
