import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

import "./CategoryPage.css";

const CategoryPage = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <div className="category-container">
        <section>
          <Link to="electrodomesticos" className="category-item">
            <h1>Electrodomésticos</h1>
          </Link>
        </section>
        <section>
          <Link to="muebles" className="category-item">
            <h1>Muebles</h1>
          </Link>
        </section>
        <section>
          <Link to="cocina" className="category-item">
            <h1>Cocina</h1>
          </Link>
        </section>
        <section>
          <Link to="electronica" className="category-item">
            <h1>Electrónica</h1>
          </Link>
        </section>
        <section>
          <Link to="patio" className="category-item">
            <h1>Patio</h1>
          </Link>
        </section>
        <section>
          <Link to="jugueteria" className="category-item">
            <h1>Juguetería</h1>
          </Link>
        </section>
        <section>
          <Link to="materiales" className="category-item">
            <h1>Materiales</h1>
          </Link>
        </section>
      </div>
      <Outlet />
    </>
  );
};

export default CategoryPage;
