import React from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { inputFields } from "../../components/formDataInputs/formInputs";
import CustomInput from "../../components/customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { postNewProductAction } from "../../features/products/productAction";
import { useDispatch } from "react-redux";
const initialState = {};
export const AddNewProductPage1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, handleOnChange } = useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const processedData = {
      ...form,
      imageLists: form.imageLists.split(","),
    };
    // const success = await dispatch(postNewBookAction(form));s
    // console.log(2000, success);
    // const formData = new FormData();
    // Object.keys(form).forEach((key) => {
    //   formData.append(key, form[key]);
    // });
    const success = await dispatch(postNewProductAction(processedData));
    console.log(2000, success);

    if (success) {
      navigate("/admin/products");
    }
    //1. call post new book api
    //2. status check

    // TODO: call create new book action
  };

  return (
    <>
      <UserLayout>
        <div>
          <Link to="/admin/products">
            <Button>
              <FaArrowLeft className="me-2" />
              Back
            </Button>
          </Link>
        </div>
        <hr />
        <div className="mt-5">
          <h3 className="p-3">
            {" "}
            ADD NEW PRODUCT Fill up the form to add new Product
          </h3>
          <Form onSubmit={handleOnSubmit}>
            {/* <Form.Group controlId="bookFile">
            <Form.Label>Upload Book Cover Image</Form.Label>
            <Form.Control
              type="file"
              name="bookFile"
              accept="image/*" // Only accept image files
              onChange={handleOnChange}
            />
          </Form.Group> */}
            {inputFields.map((input, i) => (
              <CustomInput key={i} {...input} onChange={handleOnChange} />
            ))}

            <div className="d-grid">
              <Button type="submit">Submit New Product</Button>
            </div>
          </Form>
        </div>
      </UserLayout>
    </>
  );
};
