import { Outlet } from "react-router-dom";
import { useTheme } from "../Contexts/ThemeContext";

import "./Layout.css";

import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar/NavBar";

const Layout = () => {
  const { themeValue } = useTheme();
  return (
    <div className= {themeValue + ' divBody'} id="fullPage" >
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
