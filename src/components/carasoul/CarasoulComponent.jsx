import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselComponent = () => {
  return (
    <div className="carousel1">
      <Carousel data-bs-theme="dark" interval={1000} className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d097f811b21f43e3a43f52e03fd4a7f0_9366/Basketball_Shell_Jacket_Black_JD5197_21_model.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/49d2c4d9f4d24f19967807525d54757f_9366/EQT_Reflective_Crewneck_Sweatshirt_Green_JN7146_21_model.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d097f811b21f43e3a43f52e03fd4a7f0_9366/Basketball_Shell_Jacket_Black_JD5197_21_model.jpg"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselComponent;
