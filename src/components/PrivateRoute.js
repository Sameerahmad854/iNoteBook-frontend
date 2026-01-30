import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Agar token nahi hai → redirect to login
    return <Navigate to="/login" />;
  }

  // Agar token exist karta hai → render child component
  return children;
};

export default PrivateRoute;
