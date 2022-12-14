import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase-config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={"Conectando con la app..."}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>
);