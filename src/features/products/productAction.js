import { toast } from "react-toastify";
import {
  deleteProducts,
  fetchAllProductApi,
  fetchSingleProduct,
  postNewProductApi,
  updateAProduct,
} from "./productAxios";
import { setProducts, setSelectedProduct } from "./productSlice";

export const getAllProductsAction = (isPrivate) => async (dispatch) => {
  //1. fetch products
  const fetchedData = await fetchAllProductApi(isPrivate);
  const { status, products } = fetchedData;
  //2 update data to store
  if (status == "success") {
    dispatch(setProducts(products));
  }
};

export const postNewProductAction = (obj) => async (dispatch) => {
  // call axios to send data
  const pending = postNewProductApi(obj);
  toast.promise(pending, {
    pending: "Please wait ...",
    success: pending.message,
  });

  const { status, message } = await pending;
  toast[status](message);
  console.log(status, message);

  if (status == "success") {
    // then call function to fetch all the data
    dispatch(getAllProductsAction(true));
    return true;
  } else {
    return false;
  }
};
export const getSingleProductAction = (_id) => async (dispatch) => {
  const { status, products } = await fetchSingleProduct(_id);
  if (status) {
    dispatch(setSelectedProduct(products));
  }
};

export const deleteSingleProductAction = (id) => async (dispatch) => {
  const pending = deleteProducts(id);
  toast.promise(pending, {
    pending: "Please wait ...",
  });

  const { status, message } = await pending;
  toast[status](message);
  console.log(status, message);
  // 2. fetch all update book list
  dispatch(getAllProductsAction(true));
};
export const updateSingleProductAction = (obj) => async (dispatch) => {
  const pending = updateAProduct(obj);
  toast.promise(pending, {
    pending: "Please wait....",
  });

  const { status, message } = await pending;
  toast[status](message);

  status === "success" && dispatch(getSingleProductAction(obj._id));

  return { status, message };
};
