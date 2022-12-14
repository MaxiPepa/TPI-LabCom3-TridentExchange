import { useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useTheme } from "../Contexts/ThemeContext";

import "./CategoryPage.css";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();
  const {themeValue} = useTheme();

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <div className="category-container">
        <Link to="electrodomesticos" className="category-item" id="appliance">
          <h1>Electrodomésticos</h1>
        </Link>
        <Link to="muebles" className="category-item" id="furniture">
          <h1>Muebles</h1>
        </Link>
        <Link to="vehiculos" className="category-item" id="vehicles">
          <h1>Vehículos</h1>
        </Link>
        <Link to="inmuebles" className="category-item" id="realState">
          <h1>Inmuebles</h1>
        </Link>
        <Link to="jardineria" className="category-item" id="garden">
          <h1>Jardineria</h1>
        </Link>
        <Link to="jugueteria" className="category-item" id="toyStore">
          <h1>Juguetería</h1>
        </Link>
      </div>
      <NavLink to="/new-offer" className={'new-offer-bubble new-offer-bubble-' + themeValue} id="offerBubbleButton">
        <i className="bi bi-plus-circle-dotted"/>
        <p>Nueva</p>
        <p>Oferta</p>
      </NavLink>
      <Outlet />
    </>
  );
};

export default CategoryPage;
