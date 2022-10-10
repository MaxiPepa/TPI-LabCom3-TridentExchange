import "./Configuration.css";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useEffect } from "react";

const Configuration = () => {
  const navigate = useNavigate();
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo === null) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  return <div>Configuration</div>;
};

export default Configuration;
