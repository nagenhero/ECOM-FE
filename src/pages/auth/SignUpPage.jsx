import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export const SignUpPage = () => {
  return (
    // <div
    //   className="d-flex justify-content-center "
    //   style={{ minHeight: "80vh" }}
    // >
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh", // To make sure it's vertically centered in the viewport
      }}
    >
      <div className="glass">
        <Form style={{ width: "450px" }} className="card1 p-5 mt-50 shadow-lg ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h1>SIGN UP</h1>
            <Form.Label>FULL NAME </Form.Label>
            <Form.Control type="email" placeholder="ENTER YOUR FULL NAME" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
