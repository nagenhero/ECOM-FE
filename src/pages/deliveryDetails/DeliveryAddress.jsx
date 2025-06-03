import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
  Alert,
} from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;
const DeliveryAddress = () => {
  const { cart, recentOrders } = useSelector((store) => store.cartInfo);

  const { user } = useSelector((store) => store.userInfo);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          {" "}
          {!isSubmitted ? (
            <Card className="shadow-lg">
              <Card.Body>
                <h4>Delivery Details</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter delivery address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          ) : (
            <Card>
              <Card.Body>
                <hr />

                <h5>
                  <strong>Delivery</strong>
                </h5>
                <div className="mb-1">
                  <strong>Standard Shipping</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="d-flex align-items-center">
                    <FaCheckCircle className="text-success me-2" size={20} />
                    Arrives 3-5 business days.
                  </span>
                  <span>$9.99</span>
                </div>
                <div className="mt-2">{formData.address}</div>
                <hr />
                <hr />

                <h4>Shipping Details</h4>
                <hr
                  style={{
                    height: "14px",
                    backgroundColor: "green",
                  }}
                />
                <div>
                  <strong>First Name:</strong> {formData.firstName}
                </div>
                <div>
                  <strong>Last Name:</strong> {formData.lastName}
                </div>
                <div>
                  <strong>Phone:</strong> {formData.phone}
                </div>
                <div>
                  <strong>Email:</strong> {formData.email}
                </div>
                <div>
                  <strong>Address:</strong> {formData.address}
                </div>

                <Button
                  className="bg-primary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Edit
                </Button>
              </Card.Body>
            </Card>
          )}
          <div className="d-grid " style={{ marginTop: "80px" }}>
            <Button>Checkout</Button>
          </div>
        </Col>
        <Col md={6} className="shadow-lg">
          <h1 className="">
            Product List:
            <span className="text-primary">{cart.length} items</span>
          </h1>
          <div
            style={{ height: "500px", overflowY: "auto", overflowX: "hidden" }}
          >
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
                    <div className="">Size:{product.sizes}</div>
                    <div>
                      {product.stock > 0 ? (
                        <span style={{ color: "green" }}>In Stock</span>
                      ) : (
                        <span style={{ color: "red" }}>Out of stock</span>
                      )}
                    </div>

                    <div>{product.name}</div>
                    <div className="fw-bold fs-5"> ${product.price}</div>
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
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DeliveryAddress;
