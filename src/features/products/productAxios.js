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
