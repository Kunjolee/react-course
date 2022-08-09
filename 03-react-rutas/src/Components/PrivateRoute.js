import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = {
    logged: false,
  };

  return user && user.logged;
};

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
