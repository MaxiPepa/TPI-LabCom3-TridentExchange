import "./OfferPreview.css"

const OfferPreview = () => {
    return (
        <div className="offer-card">
            <img alt="Foto de la oferta" />
            <h2>Título</h2>
            <p>Descripción</p>
            <button type="button">Ver más</button>
        </div>
    );
}

export default OfferPreview