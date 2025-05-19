import React, { useState } from "react";
import HomePage from "../pages/home/HomePage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

import SignInPage from "../pages/auth/SignInPage";
import { SignUpPage } from "../pages/auth/SignUpPage";
import { ProductLanding } from "../pages/product/ProductLanding";
import { CustomerPage } from "../pages/customer/CustomerPage";
import { ProductPage } from "../pages/product/ProductPage";
import { MyOrderPage } from "../pages/customer-order/MyOrderPage";
import { AllOrderPage } from "../pages/orders/allOrderPage";
import { ReviewsPage } from "../pages/reviews/ReviewsPage";
import { VerifyUserPage } from "../pages/auth/VerifyUserPage";
import { AddNewProductPage } from "../pages/product/AddNewProduct";
import { AddNewProductPage1 } from "../pages/product/AddNewProduct1";
import { EditProduct } from "../pages/product/EditProduct";

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
          <Route path="/verify-user" element={<VerifyUserPage />} />

          <Route path="/signin" element={<SignInPage />} />
          {/* product landing page for particular product*/}
          <Route path="product/:productid" element={<ProductLanding />} />
        </Route>

        {/* private routes */}
        <Route path="admin/products" element={<ProductPage />} />
        <Route path="admin/products/new" element={<AddNewProductPage />} />
        <Route path="admin/customers" element={<CustomerPage />} />
        <Route path="admin/all-orders" element={<AllOrderPage />} />
        <Route path="admin/reviews" element={<ReviewsPage />} />
        <Route path="admin/products/edit/:_id" element={<EditProduct />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/my-orders" element={<MyOrderPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
