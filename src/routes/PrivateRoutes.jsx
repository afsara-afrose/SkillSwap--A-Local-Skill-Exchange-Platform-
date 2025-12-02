import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <RingLoader />;
  }
  if (!user) {
    return <Navigate to="/auth/login" 
    replace 
    state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoutes;
