import React, { useEffect } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Button, Form } from "react-bootstrap";
import { inputFields } from "../../components/formDataInputs/formInputs";
import CustomInput from "../../components/customInput/CustomInput.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm.js";
import { setSelectedProduct } from "../../features/products/productSlice.js";
import { updateSingleProductAction } from "../../features/products/productAction.js";
const imageUrl = import.meta.env.VITE_APP_IMAGE_URL;

export const EditProduct = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();
  const { form, handleOnChange, setForm } = useForm({});
  const navigate = useNavigate();
  const { products, selectedProduct } = useSelector(
    (store) => store.productInfo
  );
  useEffect(() => {
    dispatch(setSelectedProduct(products.find((item) => item._id == _id)));
  }, []);

  useEffect(() => {
    setForm(selectedProduct);
  }, [selectedProduct]);
  console.log("form", form);
  console.log("selectedproduct", selectedProduct);
  const { thumbnail } = selectedProduct;
  console.log("thumbnail", thumbnail);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { __v, createdAt, updatedAt, ...rest } = form;
    if (window.confirm("Are you sure you want to make this changes?")) {
      const data = await dispatch(updateSingleProductAction(rest));
      if (data.status == "success") {
        alert("thank you for updating");
        navigate("/admin/products");
      }
    }
    // alert("are you sure?");
  };
  return (
    <div>
      <UserLayout>
        <h1>this is edit product</h1>
        <Form onSubmit={handleOnSubmit}>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group> */}
          <Form.Check
            name="status"
            onChange={handleOnChange}
            checked={form?.status === "active"}
            type="switch"
            id="custom-switch"
            label={form?.status?.toUpperCase()}
            className={
              form?.status === "active"
                ? "mb-3 text-success"
                : "mb-3 text-danger"
            }
          />
          {inputFields?.map((input, i) => (
            <CustomInput
              key={i}
              {...input}
              onChange={handleOnChange}
              value={form[input.name]}
            />
          ))}
          <div>
            <img
              className="mb-3 img-thumbnail"
              src={`${imageUrl}/${thumbnail}`}
              alt=""
              width={"140px"}
            />
          </div>
          <Form.Group className="mb-3">
            <Form.Label>upload more image (max 2)</Form.Label>
            <Form.Control
              className="w-50"
              name="image"
              type="file"
              multiple
              accept="image/* "
            />
          </Form.Group>

          <div className="d-grid">
            <Button type="submit">Update Product</Button>
          </div>
        </Form>
      </UserLayout>
    </div>
  );
};
