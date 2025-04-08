import React from "react";
import HomePage from "../pages/home/HomePage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../components/layouts/DefaultLayout";

import SignInPage from "../pages/auth/SignInPage";
import { SignUpPage } from "../pages/auth/SignUpPage";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />

          <Route />
          {/* private routes */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRoutes;
