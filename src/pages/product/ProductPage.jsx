import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";

export const ProductPage = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("Product"));
  return (
    <UserLayout pageTitle={"prodiuct List"}>
      <h1>this is product page list for admin</h1>
    </UserLayout>
  );
};
