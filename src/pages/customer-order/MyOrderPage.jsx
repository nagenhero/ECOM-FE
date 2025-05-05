import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";

export const MyOrderPage = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("My Order"));
  return (
    <UserLayout pageTitle={"my orders products"}>
      <h1>My order</h1>
    </UserLayout>
  );
};
