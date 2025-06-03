import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import { FcFactory } from "react-icons/fc";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/aa.png";
import { resetUser } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { logOutApi } from "../../features/users/userAxios";
import { GiShoppingCart } from "react-icons/gi";
const isAuthenticated = true || false;
export const Header = ({ cartCount }) => {
  const { user } = useSelector((store) => store.userInfo);
  const { cart } = useSelector((store) => store.cartInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Navbar expand="md" className="navbar navbar-dark bg-dark">
      <Container className="navbar navbar-dark bg-dark">
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" height="60" className="" />
          {/* <FcFactory /> */}
          <span> SNSS ECOMMERCE </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto navbar">
            <Link className="nav-link hover:underline" to="/">
              Home
            </Link>

            {/* Conditionally render based on authentication state */}
            {user?._id ? (
              <>
                <Link className="nav-link hover:underline" to="/dashboard">
                  Dashboard
                </Link>
                <Link
                  to="/"
                  onClick={() => {
                    // console.log("TEST");
                    // TODO: clear local and session storage add it to user Action

                    // reset user in store
                    logOutApi();
                    localStorage.removeItem("refreshJWT");
                    sessionStorage.removeItem("accessJWT");

                    dispatch(resetUser());
                  }}
                  className="nav-link hover:underline"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-link hover:underline" to="/signup">
                  Sign Up
                </Link>
                <Link className="nav-link hover:underline" to="/signin">
                  Sign In
                </Link>
                <div
                  style={{
                    color: "white",
                    fontSize: "20px",
                    padding: "0px",
                  }}
                >
                  {/* <button
                    onClick={() => addToCart(product)}
                    className="add-to-cart-button"
                  >
                    <FaShoppingCart
                      style={{
                        color: "white",
                        marginRight: "10px",
                        fontSize: "17px",
                        verticalAlign: "middle",
                      }}
                    />
                    Cart({cartCount})
                  </button> */}
                </div>
              </>
            )}
            <Link to="/cart" className=" nav-link position-relative ">
              <div className="cart-count position-absolute">{cart.length}</div>
              <GiShoppingCart className="fs-1" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
