import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({ label, controlId, ...rest }) => {
  return (
    <div>
      <Form.Group className="mb-3" controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </div>
  );
};

export default CustomInput;
