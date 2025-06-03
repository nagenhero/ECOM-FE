import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { userSignInInputs } from "../formDataInputs/userSignInInputs";

import { useLocation, useNavigate } from "react-router-dom";

import { autoLogin, loginAction } from "../../features/users/userAction";
import { useDispatch, useSelector } from "react-redux";
import CustomInput from "../customInput/CustomInput";

export const UserSignInForm = ({ setShowLoaders }) => {
  const { user } = useSelector((state) => state.userInfo);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    console.log("first", name, value);
    setForm({
      ...form,
      [name]: value,
    });
    console.log("form is", form);
  };

  const path = location?.state?.from ?? "/dashboard";
  console.log("path is", path);
  console.log("location", location);

  useEffect(() => {
    // TODO: navigate to location where the user travelled from
    // setShowLoaders(false);
    user?._id ? navigate(path) : dispatch(autoLogin());
  }, [user?._id]);
  const handlleOnSubmit = async (e) => {
    //prevent default
    e.preventDefault();
    //call login function
    await dispatch(loginAction(form, navigate));
  };

  return (
    <div>
      <h1>Login!</h1>
      <hr />
      <Form onSubmit={handlleOnSubmit}>
        {userSignInInputs.map((input, index) => (
          <CustomInput key={index} {...input} onChange={handleOnChange} />
        ))}
        <Form.Group className="mb-3 ">
          <Button className="w-100" type="submit">
            Sign In
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};
