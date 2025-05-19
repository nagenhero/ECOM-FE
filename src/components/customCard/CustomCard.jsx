import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;

export const CustomCard = ({
  _id,
  name,
  thumbnail,
  price,
  description,
  sizes,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={
          thumbnail.includes("http") ? thumbnail : `${imageUrl}/${thumbnail}`
        }
        alt=""
        width={"70px"}
      />
      <Card.Body>
        <Card.Title> {name}</Card.Title>
        <Card.Text className="fw-bold text-success">${price}</Card.Text>
        <Card.Text>{description}</Card.Text>

        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};
