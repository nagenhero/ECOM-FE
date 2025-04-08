import React from "react";
import img1 from "../../assets/o.jpg";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FcFactory } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        minHeight: "93vh",
        marginTop: "-60px",
      }}
    >
      {/* Page content goes here */}
    </div>
  );
};

export default HomePage;
