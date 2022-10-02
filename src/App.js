import {
  Route,
  RouterProvider,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./App.css";

import CategoryPage from "./components/CategoryPage/CategoryPage";
import Layout from "./components/Layout/Layout";
import NewUser from "./components/RegisterForm/NewUser/NewUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<NewUser />} />
      <Route path="/categorias" element={<CategoryPage />}>
        <Route path="/categorias/electrodomesticos" />
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
  return <RouterProvider router={router} />;
};

export default App;
