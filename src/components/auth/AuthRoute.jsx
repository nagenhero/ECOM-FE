import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children }) => {
  const { user } = useSelector((store) => store.userInfo);
  if (user?._id) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};
