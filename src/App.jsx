import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";

import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "./features/products/productAction";
import { autoLogin } from "./features/users/userAction";

function App() {
  const dispatch = useDispatch();
  console.log("wtf is happening");
  dispatch(getAllProductsAction(false));

  // dispatch(autoLogin());

  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
