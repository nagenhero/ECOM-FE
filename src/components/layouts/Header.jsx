import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FcFactory } from "react-icons/fc";
const isAuthenticated = true;
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
            {isAuthenticated ? (
              <>
                <Link className="nav-link hover:underline" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="nav-link hover:underline">Logout</Link>
              </>
            ) : (
              <>
                <Link className="nav-link hover:underline" to="/signup">
                  Sign Up
                </Link>
                <Link className="nav-link hover:underline" to="/signin">
                  Sign In
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <Navbar expand="md" className="bg-dark  text-white" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="#home">
    //       {" "}
    //       <FcFactory />
    //       <span> ECOMMERCE WEBSITE</span>
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ms-auto">
    //         <Link className="nav-link" to="/">
    //           Home
    //         </Link>
    //         {/* check for user._id */}

    //         <>
    //           {/* private menu */}
    //           <Link className="nav-link" to="/dashboard">
    //             Dashboard
    //           </Link>
    //         </>

    //         <>
    //           {/* public menus */}
    //           <Link className="nav-link" to="/signup">
    //             Sign Up
    //           </Link>
    //           <Link className="nav-link" to="/signin">
    //             Sign In
    //           </Link>
    //         </>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};
