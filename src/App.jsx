import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";

import "./App.css";

import AppRoutes from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { getAllProductsAction } from "./features/products/productAction";

function App() {
  const dispatch = useDispatch();
  dispatch(getAllProductsAction(false));

  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
