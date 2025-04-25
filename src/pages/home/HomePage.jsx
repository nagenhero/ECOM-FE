import React, { useEffect, useState } from "react";
import img1 from "../../assets/a1.jpg";
import { Navbar, Container, Nav, Row, Col, Form } from "react-bootstrap";
import { FcFactory } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { VideoComponent } from "../../components/videoContent/VideoComponet";
import CarasoulComponent from "../../components/carasoul/CarasoulComponent";
import { CartComponent } from "../../components/cartComponet/cartComponent";
import { useSelector } from "react-redux";
import { CustomCard } from "../../components/customCard/customCard";

const HomePage = ({ addToCart }) => {
  const productStore = useSelector((store) => store.productInfo);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    setSearchedProducts(productStore.products);
  }, [productStore.products]);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          top: 0,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Page content goes here */}
      </div>

      <div>
        <VideoComponent />
      </div>
      <div>
        <CarasoulComponent />
      </div>
      <div>
        <CartComponent addTOCart={addToCart} />
      </div>
      <div>
        <Container fluid>
          <hr />
          <Row>
            <Col className="d-flex justify-content-between mt-2">
              <label>{searchedProducts.length} Products found!!</label>
              <div className="">
                <Form.Control placeholder="search by products" />
              </div>
            </Col>
          </Row>
          <hr />

          <Row>
            <Col className="d-flex gap-4 flex-wrap">
              {searchedProducts.map((product) => (
                <Link
                  key={product._id}
                  to={"/product/" + product._id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <CustomCard {...product} />
                </Link>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
