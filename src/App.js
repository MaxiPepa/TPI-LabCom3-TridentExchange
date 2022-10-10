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
import RegisterForm from "./components/RegisterForm/RegisterForm";
import SignIn from "./components/SingIn/SignIn";
import { AuthProvider } from "./components/Contexts/AuthContext";
import { DatabaseProvider } from "./components/Contexts/DatabaseContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register-form" element={<RegisterForm />} />
      <Route path="/categorias" element={<CategoryPage />}>
        <Route
          path="/categorias/electrodomesticos"
          element={<OfferPreview />}
        />
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
  return (
    <AuthProvider>
      <DatabaseProvider>
        <RouterProvider router={router} />
      </DatabaseProvider>
    </AuthProvider>
  );
};

export default App;
