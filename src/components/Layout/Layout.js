import { Outlet } from "react-router-dom";

import "./Layout.css"

import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";

const Layout = () => {
  return (
    <div className="main-content">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;