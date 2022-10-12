import "./OfferItem.css";

const OfferItem = ({ offerList }) => {
  const offers = offerList.map((offer) => {
    return (
      <div className="offer-card">
        <img src={offer.photoLink} alt="Foto de la oferta" />
        <h2>{offer.title}</h2>
        <p>{offer.description}</p>
        <p>{offer.preferredItem}</p>
        <p>{offer.contact}</p>
        <button type="button">
          <i className="bi bi-trash3"></i>
        </button>
      </div>
    );
  });

  return <div>{offers}</div>;
};

export default OfferItem;