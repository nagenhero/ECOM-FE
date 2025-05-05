import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";

export const AllOrderPage = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("All-orders"));

  return (
    <UserLayout pageTitle={"THIS IA ALL ORDERED ORDER LIST FOR ADMIN"}>
      <h1>Al orders</h1>
    </UserLayout>
  );
};
