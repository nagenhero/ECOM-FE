import React from "react";
import { Container, Row, Col, Table, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;
import { TiTick } from "react-icons/ti";
import {
  emptyCart,
  removeCart,
  setRecentOrders,
} from "../../features/cart/cartSlice";
import { orderHistoryAction } from "../../features/cart/cartAction";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, recentOrders } = useSelector((store) => store.cartInfo);

  const { user } = useSelector((store) => store.userInfo);
  console.log("what the hell");

  console.log("user", user);
  console.log("cart", cart);
  console.log("recentporders", recentOrders);

  const handleOnRemoveProduct = (_id) => {
    console.log(_id);
    dispatch(removeCart(_id));
  };
  const handleOnCheckout = async () => {
    navigate("/delivery-details");

    // if (confirm("Are you sure you want to checkout cart lists?")) {
    //   const formattedCart = cart.map((item) => ({
    //     productId: item._id,
    //     productName: item.name,
    //     productThumbnail: item.thumbnail,
    //   }));

    //   const result = await dispatch(orderHistoryAction(formattedCart));
    //   console.log("resultdara", result);
    //   //1. hav a API to send a use rnad the car list to create
    //   // new checkout transction in databse
    //   //2. clear cart state
    //   if (result.status === "success") {
    //     dispatch(setRecentOrders(result.data));
    //     dispatch(emptyCart());

    //     console.log("recentporders after button clicked", recentOrders);
    //     //3. send user to thankyou page
    //     navigate("/thankyou");
    //   }
    //   // dispatch(emptyCart());
    //   //3. send user to thankyou page
    // }
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1 className="py-5">My cart List:</h1>
            <div>
              <Table hover>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product._id}>
                      <td className="" style={{ width: "150px" }}>
                        <img
                          src={
                            product.thumbnail.includes("http")
                              ? product.thumbnail
                              : `${imageUrl}/${product.thumbnail}`
                          }
                          alt=""
                          width="100%"
                        />
                      </td>
                      <td className="">
                        Size:{product.sizes}
                        <div>
                          {product.stock > 0 ? (
                            <span style={{ color: "green" }}>In Stock</span>
                          ) : (
                            <span style={{ color: "red" }}>Out of stock</span>
                          )}
                        </div>
                        <div>
                          <TiTick
                            className="fs-4 "
                            style={{ color: "green" }}
                          />
                          Delivery Available
                        </div>
                      </td>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>
                        <Button
                          className="bg-danger"
                          onClick={() => handleOnRemoveProduct(product._id)}
                        >
                          {" "}
                          Remove{" "}
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              {cart.length > 0 ? (
                <div className="text-end">
                  {user._id ? (
                    <Button onClick={handleOnCheckout}>
                      {" "}
                      Procced to Checkout
                    </Button>
                  ) : (
                    <Link to="/signin" state={{ from: "/cart" }}>
                      <Button>Login to Burrow </Button>
                    </Link>
                  )}
                </div>
              ) : (
                <Alert className="bg-warning">No product in cart</Alert>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CartPage;
