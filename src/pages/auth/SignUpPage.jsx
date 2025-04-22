import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import img from "../../assets/ww.jpg";
// //fName": "john",
// "lName":"Doe",
// "email":"johon@gmail.com",
// "phone":"1234567",
// "password":"password
export const SignUpPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
        padding: "2rem",
        // background: "linear-gradient(to right,#EA8D8D,#A890FE)",
        // minHeight: "100vh", // full page height
        // color: "#fff", // make text readable
        // padding: "2rem",
      }}
    >
      <Form
        style={{ width: "450px" }}
        className="card p-3 shadow-lg border border-2 border-dark rounded p-5"
      >
        <h3 className="fw-bold text-primary">Signup</h3>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="jone@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="049560003" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="*******" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label> Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="*******" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
