import React, { useEffect } from "react";
import { getAllProductsAction } from "../../features/products/productAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineEditOff } from "react-icons/md";

export const ProductTable = () => {
  const dispatch = useDispatch();

  // TODO: get book list from book store
  //const books = [];
  const { products } = useSelector((state) => state.productInfo);

  const handleOnDelete = async (id) => {
    // 1. delete axios call
    // TODO: call delete action
    if (window.confirm("are you sure to delete this?")) {
      dispatch(deleteSingleBookAction(id));
    }
  };

  useEffect(() => {
    // TODO: fetch all books for admin
    dispatch(getAllProductsAction(true));
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>{products.length} Books found!</div>

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
            <th>image</th>
            <th>Desription</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img
                  src={
                    item.thumbnail.includes("http")
                      ? item.thumbnail
                      : `${imageUrl}/${item.thumbnail}`
                  }
                  alt=""
                  width={"70px"}
                />

                {/* <img src={item.thumbnail} alt="" width={"70px"} /> */}
              </td>
              <td>
                <h2>{item.name.slice(0, 30)} ...</h2>
                <div>{item.price}</div>
                <div
                  className={
                    item.status === "active" ? "text-success" : "text-danger"
                  }
                >
                  Status: {item.status}
                </div>
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
