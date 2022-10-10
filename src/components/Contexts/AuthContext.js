import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("No hay un auth provider");
  return context;
};

export const AuthProvider = ({ children }) => {
  const auth = getAuth();
  const [userInfo, setUserInfo] = useState(null);

  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then(() => {
      setUserInfo(auth.currentUser);
    });
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password).then(() => {
      setUserInfo(auth.currentUser);
    });
  };

  const logout = () => {
    signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ userInfo, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
