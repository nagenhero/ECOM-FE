import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FcFactory } from "react-icons/fc";

export const Header = () => {
  return (
    <Navbar expand="md" className="bg-dark  text-white" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <FcFactory />
          <span> ECOMMERCE WEBSITE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            {/* check for user._id */}

            <>
              {/* private menu */}
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
              <Link
                className="nav-link"
                onClick={() => {
                  // console.log("TEST");
                  // DONE clear local and session storage add it to user Action
                  localStorage.removeItem("refreshJWT");
                  sessionStorage.removeItem("accessJWT");

                  // reset user in store
                  dispatch(resetUser());
                  navigate("/");
                }}
              >
                Logout
              </Link>
            </>

            <>
              {/* public menus */}
              <Link className="nav-link" to="/signup">
                Sign Up
              </Link>
              <Link className="nav-link" to="/signin">
                Sign In
              </Link>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
