import {
  Route,
  RouterProvider,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";

import CategoryPage from "./components/CategoryPage/CategoryPage";
import OfferPreview from "./components/OfferPreview/OfferPreview";
import Layout from "./components/Layout/Layout";
import NewUser from "./components/RegisterForm/NewUser/NewUser";
import SignIn from "./components/Header/SingIn/SignIn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<NewUser />} />
      <Route path="/categorias" element={<CategoryPage />}>
        <Route path="/categorias/electrodomesticos" element={<OfferPreview />} />
        <Route path="/categorias/muebles" />
        <Route path="/categorias/cocina" />
        <Route path="/categorias/electronica" />
        <Route path="/categorias/patio" />
        <Route path="/categorias/jugueteria" />
        <Route path="/categorias/materiales" />
      </Route>
    </Route>
  )
);

const App = () => {
<<<<<<< HEAD
  return <RouterProvider router={router} />;
=======
  return (
    <div className="main-program">
      <NavBar />
      <SignIn/>

      <div className="register-form">
        <NewUser />
      </div>
      <Footer />
    </div>
  );
>>>>>>> 63a5dc1 (noCommit)
};

export default App;
