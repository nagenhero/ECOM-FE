import React, { useState } from "react";
import { userSignUpInputs } from "../formDataInputs/userSignUpInputs";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signUpAction } from "../../features/users/userAction";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../customInput/CustomInput";

export const UserSignUpForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const handleOnChange = (e) => {
    let { name, value } = e.target;
    console.log("first", name, value);
    setForm({
      ...form,
      [name]: value,
    });
    console.log("form is", form);
  };
  const handlleOnSubmit = async (e) => {
    //prevent default
    e.preventDefault();
    //call login function
    await dispatch(signUpAction(form, navigate));
  };
  return (
    <div>
      <h1>Signup!</h1>
      <hr />
      <Form onSubmit={handlleOnSubmit}>
        {userSignUpInputs.map((input, index) => (
          <CustomInput key={index} {...input} onChange={handleOnChange} />
        ))}
        <Form.Group className="mb-3 ">
          <Button className="w-100" type="submit">
            Sign up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
