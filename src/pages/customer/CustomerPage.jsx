import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";

export const CustomerPage = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("Customers"));
  return (
    <UserLayout pageTitle={"CUSTOMER DETAILS LIST"}>
      <h1>This is customer List page for admin</h1>
    </UserLayout>
  );
};
