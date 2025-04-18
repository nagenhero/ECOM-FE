import React from "react";
import img1 from "../../assets/a1.jpg";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FcFactory } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { VideoComponent } from "../../components/videoContent/VideoComponet";
import CarasoulComponent from "../../components/carasoul/CarasoulComponent";
import { CartComponent } from "../../components/cartComponet/cartComponent";

const HomePage = ({ addToCart }) => {
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
    </div>
  );
};

export default HomePage;
