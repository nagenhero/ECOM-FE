import { apiProcessor } from "../../../helpers/axiosHelper";

const productEP = import.meta.env.VITE_APP_ROOT_URL + "/products";
export const fetchAllProductApi = (isPrivate) => {
  const apiObj = {
    method: "get",
    url: `${productEP}${isPrivate ? "" : "/pub-product"}`,
    isPrivate,
  };
  return apiProcessor(apiObj);
};
export const postNewProductApi = (newProductObj) => {
  const apiObj = {
    method: "post",
    url: productEP,
    isPrivate: true,
    isRefreshToken: false,
    data: newProductObj,
    // contentType: "multipart/form-data",
  };

  return apiProcessor(apiObj);
};
export const deleteProducts = async (_id) => {
  const apiObj = {
    method: "delete",
    url: productEP + "/" + _id,
    isPrivate: true,
    isRefreshToken: false,
  };
  return apiProcessor(apiObj);
};
