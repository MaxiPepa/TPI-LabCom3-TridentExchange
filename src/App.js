import {
  Route,
  RouterProvider,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";

import { AuthProvider } from "./components/Contexts/AuthContext";
import { DatabaseProvider } from "./components/Contexts/DatabaseContext";
import { ThemeProvider } from "./components/Contexts/ThemeContext";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import OfferPreview from "./components/OfferPreview/OfferPreview";
import Layout from "./components/Layout/Layout";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import SignIn from "./components/SingIn/SignIn";
import NewOffer from "./components/NewOffer/NewOffer";
import Configuration from "./components/Configuration/Configuration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register-form" element={<RegisterForm />} />
      <Route path="/categorias" element={<CategoryPage />}>
        <Route
          path="/categorias/electrodomesticos"
          element={<OfferPreview category={"appliance"} />}
        />
        <Route
          path="/categorias/muebles"
          element={<OfferPreview category={"furniture"} />}
        />
        <Route
          path="/categorias/vehiculos"
          element={<OfferPreview category={"vehicles"} />}
        />
        <Route
          path="/categorias/inmuebles"
          element={<OfferPreview category={"realState"} />}
        />
        <Route
          path="/categorias/jardineria"
          element={<OfferPreview category={"garden"} />}
        />
        <Route
          path="/categorias/jugueteria"
          element={<OfferPreview category={"toyStore"} />}
        />
      </Route>
      <Route path="/configuracion" element={<Configuration />} />
      <Route path="/new-offer" element={<NewOffer />} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <DatabaseProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </DatabaseProvider>
    </AuthProvider>
  );
};

export default App;
