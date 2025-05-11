import React, { useEffect } from "react";
import { getAllProductsAction } from "../../features/products/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineEditOff } from "react-icons/md";
import { getAllCustomersOnly } from "../../features/users/userAction";

export const CustomerTable = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.productInfo);

  const { user } = useSelector((state) => state.userInfo);
  const { customers } = useSelector((state) => state.userInfo);
  console.log("the prducts are", products);
  console.log("the user are", user);
  console.log("the customers are", customers);

  useEffect(() => {
    console.log("product table useeffet");
    dispatch(getAllCustomersOnly());
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div className="bg-dark text-white p-2">
          {customers.length} Customers found!
        </div>

        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search the products"
          />
        </div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={
                    item?.thumbnail?.includes("http")
                      ? item.thumbnail
                      : `${imageUrl}/${item.thumbnail}`
                  }
                  alt=""
                  width={"120px"}
                />

                {/* <img src={item.thumbnail} alt="" width={"70px"} /> */}
              </td>
              <td>
                {item.email}
                {/* <img
                  src={
                    item.thumbnail.includes("http")
                      ? item.thumbnail
                      : `${imageUrl}/${item.thumbnail}`
                  }
                  alt=""
                  width={"70px"}
                /> */}

                {/* <img src={item.thumbnail} alt="" width={"70px"} /> */}
              </td>
              <td>
                {item.fName} {item.lName}
              </td>
              <td>{item.phone}</td>
              <td style={{ color: item.role === "admin" ? "red" : "inherit" }}>
                {item.role}
              </td>
              <td>
                <Link to={"/admin/book/edit/" + item._id}>
                  <MdOutlineEditOff
                    className=" me-5"
                    style={{
                      fontSize: "60px",
                      backgroundColor: "white",
                      padding: "10px",
                      color: "blue",

                      transition: "background-color 0.3s, color 0.3s",
                      cursor: "pointer",
                      // keep the icon orange like `text-warning`
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "blue";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "white";
                      e.currentTarget.style.color = "blue";
                    }}
                  />
                  {/* <Button variant="warning" className="me-2">
                    Edit
                  </Button> */}
                </Link>
                {/* <Button
                  variant="danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  Delete
                </Button> */}
                <MdDeleteForever
                  className=" "
                  style={{
                    fontSize: "60px",
                    backgroundColor: "white",
                    padding: "10px",

                    transition: "background-color 0.3s, color 0.3s",
                    cursor: "pointer",
                    color: "red", // keep the icon orange like `text-warning`
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "red";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "white";
                    e.currentTarget.style.color = "red";
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
