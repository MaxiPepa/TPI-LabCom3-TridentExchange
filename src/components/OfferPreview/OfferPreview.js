import { useEffect, useState } from "react";
import { useDatabase } from "../Contexts/DatabaseContext";
import { useTheme } from "../Contexts/ThemeContext";
import OfferItem from "./OfferItem";
import "./OfferPreview.css";

const OfferPreview = ({ category }) => {
  const { selectData } = useDatabase();
  const [offerList, setOfferList] = useState(null);
  const {themeValue} = useTheme();

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
        <h2 className={themeValue}>No hay ofertas cargadas en esta categoría.</h2>
      ) : (
        <OfferItem offerList={offerList} />
      )}
    </>
  );
};

export default OfferPreview;
