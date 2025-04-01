import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";

import "./App.css";

import AppRoutes from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
