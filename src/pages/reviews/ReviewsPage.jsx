import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";

export const ReviewsPage = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("All-reviews"));
  return (
    <UserLayout pageTitle={"REVIEWS"}>
      <h1>this is review pages for admin</h1>
    </UserLayout>
  );
};
