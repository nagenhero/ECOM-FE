import { apiProcessor } from "../../../helpers/axiosHelper";
const orderHistoryEP = import.meta.env.VITE_APP_ROOT_URL + "/orders";

//calling api login backend
export const createOrderHistoryApi = (orderObj) => {
  const apiObj = {
    method: "post",
    url: orderHistoryEP,
    isPrivate: true,
    data: orderObj,
  };
  return apiProcessor(apiObj);
};
