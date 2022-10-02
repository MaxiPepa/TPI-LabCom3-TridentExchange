import { Link } from "react-router-dom";

import "./CategoryPage.css";


const CategoryPage = () => {
  return (
    <div className="category-container">
      <Link to="electrodomesticos" className="category-item">
        <h1>Electrodomésticos</h1>
      </Link>
      <Link to="muebles" className="category-item">
        <h1>Muebles</h1>
      </Link>
      <Link to="cocina" className="category-item">
        <h1>Cocina</h1>
      </Link>
      <Link to="electronica" className="category-item">
        <h1>Electrónica</h1>
      </Link>
      <Link to="patio" className="category-item">
        <h1>Patio</h1>
      </Link>
      <Link to="jugueteria" className="category-item">
        <h1>Juguetería</h1>
      </Link>
      <Link to="materiales" className="category-item">
        <h1>Materiales</h1>
      </Link>
    </div>
  );
};

export default CategoryPage;
