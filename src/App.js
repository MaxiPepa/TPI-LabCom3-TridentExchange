import "./App.css";

import NavBar from "./components/Header/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import NewUser from "./components/RegisterForm/NewUser/NewUser";

const App = () => {
  return (
    <div className="main-program">
      <NavBar />
      <NewUser />
      <Footer />
    </div>
  );
}

export default App;
