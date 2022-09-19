import "./App.css";

import NavBar from "./components/Header/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NewUser from "./components/RegisterForm/NewUser/NewUser";

const App = () => {
  return (
    <div className="main-program">
      <NavBar />
      <div className="register-form">
        <NewUser />
      </div>
      <Footer />
    </div>
  );
};

export default App;
