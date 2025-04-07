import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FcFactory } from "react-icons/fc";
import { useState } from "react";
const isAuthenticated = true || false;
export const Header = () => {
  return (
    <Navbar expand="md" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <FcFactory />
          <span> ECOMMERCE WEBSITE</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link hover:underline" to="/">
              Home
            </Link>

            {/* Conditionally render based on authentication state */}

            <>
              <Link className="nav-link hover:underline" to="/dashboard">
                Dashboard
              </Link>
              <Link className="nav-link hover:underline">Logout</Link>
            </>

            <>
              <Link className="nav-link hover:underline" to="/signup">
                Sign Up
              </Link>
              <Link className="nav-link hover:underline" to="/signin">
                Sign In
              </Link>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
