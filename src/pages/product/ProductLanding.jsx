import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;

export const ProductLanding = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [showImage, setShowImage] = useState(0);
  const [categoryName, setCategoryName] = useState("");
  const handleAddToCart = async () => {
    if (!selectedSize) return alert("Please select a size");
  };

  const { products } = useSelector((store) => store.productInfo);
  const { productid } = useParams();
  const product = products.find((item) => item._id === productid);
  console.log("product", product);

  if (!product?._id) {
    alert("Product not found");
  }
  const {
    _id,
    name,
    thumbnail,
    price,
    sizes,
    description,
    status,
    averageRating,
    category,
    stock,
    imageLists,
  } = product;
  return (
    <>
      <Container fluid className="mt-5">
        <Row className="mt-100">
          <Col md={6}>
            {/* <div className="" style={{ width: "600px", height: "auto" }}>
            <img
              src={thumbnail}
              alt="..."
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div> */}
            <div
              className="m-auto"
              style={{ maxWidth: "500px", backgroundColor: "white" }}
            >
              {/* If imageLists?.[showImage] is truthy (i.e., it exists and is not null/undefined/empty),
then use imageLists[showImage],
otherwise use thumbnail */}

              {/* <img
                src={
                  thumbnail.includes("http")
                    ? thumbnail
                    : `${imageUrl}/${thumbnail}`
                }
                alt=""
                width={"100%"}
              /> */}

              {/* <img
                src={
                  imageLists?.[showImage] ? imageLists[showImage] : thumbnail
                }
                alt=""
                width={"100%"}
              /> */}
              <img
                src={
                  imageLists?.[showImage]
                    ? imageLists[showImage].includes("http")
                      ? imageLists[showImage]
                      : `${imageUrl}/${imageLists[showImage]}`
                    : thumbnail
                }
                alt=""
                style={{
                  width: "100%",
                  height: "600px", // or any fixed height you prefer
                  objectFit: "contain", // ensures image covers the box without distortion
                  borderRadius: "8px", // optional, for rounded corners
                }}
                s
              />
            </div>
            <div
              className=" m-auto d-flex overflow-scroll gap-2 py-3"
              style={{ maxWidth: "500px" }}
            >
              {console.log("ddD", imageLists)}
              {imageLists.map((item, i) => (
                <img
                  src={item.includes("http") ? item : `${imageUrl}/${item}`}
                  width={"100px"}
                  className="img-thumbnail"
                  onClick={() => setShowImage(i)}
                />
              ))}
            </div>
          </Col>
          <Col md={6}>
            <h2>Category:{category}</h2>
            <h1>{name}</h1>
            <h2>{price}</h2>

            <p>{description}</p>
            <hr />
            <h2>Choose US size</h2>
            <hr />
            <div>
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    backgroundColor: selectedSize === size ? "green" : "#fff",
                    color: selectedSize === size ? "#fff" : "#000",
                    border: "2px solid #000",
                    margin: "15px",
                    padding: "20px 30px",
                    fontSize: "26px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.color = "#fff";
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor =
                      selectedSize === size ? "green" : "#fff";
                    e.target.style.color =
                      selectedSize === size ? "#fff" : "#000";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  {size}
                </button>
              ))}
            </div>

            {/* Quantity Control */}
            <br />
            <h2>Quantity:</h2>

            <div
              style={{
                marginTop: "10px",
                fontSize: "25px",
                // display: "flex",
                // alignItems: "center",
              }}
            >
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                style={{
                  padding: "10px 15px", // Increase padding for bigger buttons
                  fontSize: "20px", // Bigger font size for the button
                  cursor: "pointer", // Add pointer cursor on hover
                  borderRadius: "5px", // Rounded corners
                  border: "1px solid #ccc", // Border style
                }}
              >
                -
              </button>
              <span
                style={{
                  margin: "0 20px",
                  fontSize: "20px",
                  padding: "5px 15px",
                  width: "50px ", // Adds space inside the border
                  border: "2px solid #ccc", // Adds a border
                  borderRadius: "5px",
                  //   backgroundColor: "grey",
                  display: "inline-block", // Rounded corners for a clean look
                }}
              >
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                style={{
                  padding: "10px 15px", // Same padding for consistency
                  fontSize: "20px", // Bigger font size for the button
                  cursor: "pointer", // Add pointer cursor on hover
                  borderRadius: "5px", // Rounded corners
                  border: "1px solid #ccc", // Border style
                }}
              >
                +
              </button>
            </div>

            <Button
              className=""
              onClick={handleAddToCart}
              style={{
                marginTop: "20px",
                backgroundColor: "rgb(35, 185, 45)",
                color: "#fff", // optional: make text white for contrast
                border: "none", // optional: remove border
                padding: "13px 12px",
                width: "100%",
                fontFamily: "Open Sans",
                fontSize: "26px",
                fontWeight: "bold",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </Button>
            <div
              style={{
                // display: "flex",
                // gap: "0px",
                marginTop: "10px",
                // backgroundColor: "red",
                // display: "flex",
                // displayItems: "center",

                // alignItems: "center",
              }}
            >
              <img
                src="https://d3k1w8lx8mqizo.cloudfront.net/INTEGRATIONS/2016/zippay/modals/fashion-assets/zipPayFashion.png"
                alt="Afterpay"
                height="30"
              />
              <img
                src="https://mma.prnewswire.com/media/1224081/Afterpay_Mint_Logo.jpg?p=facebooks"
                alt="Zip"
                height="30"
              />
              <img
                src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
                alt="PayPal"
                height="30"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
