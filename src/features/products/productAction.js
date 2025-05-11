import { toast } from "react-toastify";
import { deleteProducts, fetchAllProductApi } from "./productAxios";
import { setProducts } from "./productSlice";

export const getAllProductsAction = (isPrivate) => async (dispatch) => {
  //1. fetch products
  const fetchedData = await fetchAllProductApi(isPrivate);
  const { status, products } = fetchedData;
  //2 update data to store
  if (status == "success") {
    dispatch(setProducts(products));
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
