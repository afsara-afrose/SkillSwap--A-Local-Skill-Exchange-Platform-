import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router";
import { RingLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  
  if (!user) {
    return <Navigate to="/auth/login" 
    replace 
    state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoutes;
