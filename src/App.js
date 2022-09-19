import "./App.css";

import NavBar from "./components/Header/NavBar/NavBar";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="main-program">
      <NavBar />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default App;
