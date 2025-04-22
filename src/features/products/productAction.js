import { fetchAllProductApi } from "./productAxios";
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
