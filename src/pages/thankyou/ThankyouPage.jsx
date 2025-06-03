import React, { useEffect } from "react";
import { Container, Row, Col, Table, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

import thanksimg from "../../assets/thankyou.jpg";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;
import { TiTick } from "react-icons/ti";
import {
  emptyCart,
  emptyRecentOrders,
  removeCart,
  setRecentOrders,
} from "../../features/cart/cartSlice";
import { orderHistoryAction } from "../../features/cart/cartAction";

const ThankyouPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, recentOrders } = useSelector((store) => store.cartInfo);

  const { user } = useSelector((store) => store.userInfo);
  console.log("what the hell");

  console.log("user", user);
  console.log("cart", cart);
  console.log("recentorders", recentOrders);

  useEffect(() => {
    // Clear recentOrders after displaying them
    return () => {
      dispatch(emptyRecentOrders());
    };
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row>
          <div style={{ maxWidth: "100%", backgroundColor: "white" }}>
            <img
              src={thanksimg}
              alt="Product"
              style={{
                width: "100%",
                height: "400px", // or any fixed height you prefer
                objectFit: "cover", // ensures image covers the box without distortion
                borderRadius: "8px", // optional, for rounded corners
              }}
            />
          </div>
        </Row>
        <Row>
          <Col>
            <h1 className="py-5 bg-warning p-4 text-white">
              THANK YOU FOR SHOPPING WITH US:
            </h1>
            <div>
              <h2>Your Order details are:</h2>
            </div>

            <div>
              {recentOrders.map((order) => (
                <div key={order._id}>
                  <h4>Order ID: {order._id}</h4>
                  {order.cart.map((item) => (
                    <div
                      key={item._id}
                      style={{
                        marginBottom: "1rem",
                        border: "1px solid #ccc",
                        padding: "10px",
                      }}
                    >
                      <img
                        src={
                          item.productThumbnail.includes("http")
                            ? item.productThumbnail
                            : `${imageUrl}/${item.productThumbnail}`
                        }
                        alt=""
                        width="100"
                      />
                      <strong className="m-2 gap-2">Name:</strong>{" "}
                      {item.productName}
                      <strong className="m-2 gap-2">ID:</strong>{" "}
                      {item.productId}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ThankyouPage;
