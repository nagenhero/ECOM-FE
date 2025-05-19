import React, { useEffect, useState } from "react";
import { UserLayout } from "../../components/layouts/UserLayout";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { inputFields } from "../../components/formDataInputs/formInputs";
import CustomInput from "../../components/customInput/CustomInput";
import useForm from "../../hooks/useForm";
import { postNewProductAction } from "../../features/products/productAction";
import { useDispatch } from "react-redux";
import axios from "axios";

const initialState = {};
export const AddNewProductPage = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, handleOnChange } = useForm(initialState);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // const processedData = {
    //   ...form,
    //   imageLists: form.imageLists.split(","),
    // };
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });
    // const success = await dispatch(postNewBookAction(form));s
    // console.log(2000, success);
    // const formData = new FormData();
    // Object.keys(form).forEach((key) => {
    //   formData.append(key, form[key]);
    // });
    const success = await dispatch(postNewProductAction(formData));
    console.log(2000, success);

    if (success) {
      navigate("/admin/products");
    }
    //1. call post new book api
    //2. status check

    // TODO: call create new book action
  };

  // Fetch all categories on mount
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const res = await axios.get("http://localhost:9004/api/v1/categories");
  //       setCategories(res.data);
  //     } catch (error) {
  //       console.error("Error fetching categories:", error);
  //     }
  //   };
  //   fetchCategories();
  // }, []);
  const fetchCategories = async () => {
    try {
      const token = sessionStorage.getItem("accessJWT"); // or sessionStorage, or wherever your app stores the JWT
      if (!token) {
        throw new Error("No token found. User may not be authenticated.");
      }

      const res = await axios.get("http://localhost:9004/api/v1/categories", {
        headers: {
          authorization: token,
        },
      });
      console.log("resonsed data is", res.data);
      setCategories(res.data.products);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  console.log("fetched categories", categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  // Fetch subcategories whenever a category is selected
  useEffect(() => {
    const fetchSubcategories = async () => {
      if (form.category) {
        try {
          const token = sessionStorage.getItem("accessJWT");
          if (!token) {
            throw new Error("No token found. User may not be authenticated.");
          }

          const res = await axios.get(
            `http://localhost:9004/api/v1/subCategories/${form.category}`,
            {
              headers: {
                authorization: token,
              },
            }
          );
          setSubcategories(res.data.subCategories);
        } catch (error) {
          console.error("Error fetching subcategories:", error);
        }
      } else {
        setSubcategories([]);
      }
    };
    fetchSubcategories();
  }, [form.category]);

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
          <h3 className="p-3">Fill up the form to add new Product</h3>
          <Form onSubmit={handleOnSubmit}>
            <div className="d-flex gap-3 mb-3">
              <Form.Group controlId="category">
                <Form.Label className="text-dark fw-bold">Category</Form.Label>
                <Form.Select
                  name="category"
                  onChange={handleOnChange}
                  required
                  className="bg-warning"
                  // value={form.category} // Uncomment if using controlled input
                >
                  <option value="">-- Select Category --</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="subCategory">
                <Form.Label className="text-dark fw-bold">
                  Subcategory
                </Form.Label>
                <Form.Select
                  name="subCategory"
                  // value={form.subCategory}
                  onChange={handleOnChange}
                  required
                  className="bg-warning"
                >
                  <option value="">-- Select Subcategory --</option>
                  {subcategories.map((sub) => (
                    <option key={sub._id} value={sub._id}>
                      {sub.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <div>
              <Form.Group controlId="productFile">
                <Form.Label>Upload products image</Form.Label>
                <Form.Control
                  className="w-50"
                  type="file"
                  name="productFile"
                  accept="image/*"
                  onChange={handleOnChange}
                />
              </Form.Group>
            </div>

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
