import React, { useState } from "react";
import HomePage from "../pages/home/HomePage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

import SignInPage from "../pages/auth/SignInPage";
import { SignUpPage } from "../pages/auth/SignUpPage";
import { ProductLanding } from "../pages/product/ProductLanding";

const AppRoutes = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<DefaultLayout cartCount={cart.length} />}>
          <Route index element={<HomePage addToCart={addToCart} />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          {/* product landing page for particular product*/}
          <Route path="product/:productid" element={<ProductLanding />} />

          <Route />

          {/* private routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
