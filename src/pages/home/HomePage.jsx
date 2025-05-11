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
import { RxDoubleArrowRight } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

const HomePage = ({ addToCart }) => {
  const productStore = useSelector((store) => store.productInfo);
  const [searchedProducts, setSearchedProducts] = useState([]);

  useEffect(() => {
    setSearchedProducts(productStore.products);
  }, [productStore.products]);
  const handleOnSearch = (e) => {
    const { value } = e.target;

    setSearchedProducts(
      productStore.products.filter(({ name }) =>
        name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          display: "flex",
          // alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",

          alignItems: "flex-start",
          padding: "2rem",
          color: "black",

          // textAlign: "left",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            maxWidth: "90%",
            backgroundColor: "white",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            padding: "10px",
          }}
        >
          Affordable Luxury
        </h1>
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            maxWidth: "90%",
            backgroundColor: "white",

            padding: "10px",
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          100% CASHMERE
        </h1>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "1rem 1.5rem",
            border: "none",
            borderRadius: "5px",
            fontSize: "2rem",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#b30000")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
        >
          Shop Now
          <RxDoubleArrowRight
            style={{
              marginLeft: "0.5rem",
              backgroundColor: "transparent",
              pointerEvents: "none", // ensures it's not clickable or highlighted
            }}
          />
        </button>
        {/* <div>
          <FaHome />
          <CiSearch />
          <FaRegUser />
        </div> */}
        {/* for boootom icons search home login */}
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Link to="/">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "30px",
              }}
            >
              <FaHome style={{ color: "black", fontSize: "23px" }} />
            </div>
          </Link>
          <Link to="/signin">
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "30px",
              }}
            >
              <CiSearch style={{ color: "black", fontSize: "23px" }} />
            </div>
          </Link>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "30px",
            }}
          >
            <FaRegUser style={{ color: "black", fontSize: "23px" }} />
          </div>
        </div>
        {/* end of div bottom icons search home login */}
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
                <Form.Control
                  onChange={handleOnSearch}
                  placeholder="search by products"
                />
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
