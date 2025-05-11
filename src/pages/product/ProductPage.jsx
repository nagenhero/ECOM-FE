import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { useDispatch } from "react-redux";
import { setMenu } from "../../features/users/userSlice";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoIosAddCircle } from "react-icons/io";
import { ProductTable } from "../../components/table/ProductTable";

export const ProductPage = () => {
  const dispatch = useDispatch();
  dispatch(setMenu("Product"));
  return (
    <UserLayout pageTitle={"prodiuct List"}>
      <h1>this is product page list for admin</h1>
      <div className="d-flex justify-content-center align-item-center">
        <Link>
          <Button className="d-flex align-items-center">
            <IoIosAddCircle className="me-2" />
            Add New Product
          </Button>
        </Link>
      </div>
      <ProductTable />
    </UserLayout>
  );
};
