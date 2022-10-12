import { useEffect, useState } from "react";
import { useDatabase } from "../Contexts/DatabaseContext";
import OfferItem from "./OfferItem";
import "./OfferPreview.css";

const OfferPreview = ({ category }) => {
  const { selectData } = useDatabase();
  const [offerList, setOfferList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await selectData(category);
      setOfferList(data);
    };
    fetchData();
  }, [category, selectData]);

  return (
    <>
      {offerList === null ? (
        <h2>No hay ofertas cargadas en esta categoría.</h2>
      ) : (
        <OfferItem offerList={offerList} />
      )}
    </>
  );
};

export default OfferPreview;
