import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Header />
      {/* main body  */}
      <main className="main"></main>
      <Outlet />
      {/* footer  */}
      <Footer />
    </div>
  );
};
