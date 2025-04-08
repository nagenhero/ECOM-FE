import React from "react";
// import { useDispatch } from "react-redux";
import { UserLayout } from "../../components/layouts/UserLayout";

const DashboardPage = () => {
  // const dispatch = useDispatch();

  return (
    <UserLayout
      pageTitle="Dashboard"
      style={{
        minHeight: "100vh",
      }}
    >
      <h1>Main Dashboard Area Created By Sita </h1>
    </UserLayout>
  );
};

export default DashboardPage;
