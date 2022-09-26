import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
