import { toast } from "react-toastify";
import { createOrderHistoryApi } from "./cartAxios";

export const orderHistoryAction = (obj) => async (dispatch) => {
  // 1. burrowAxios
  const pending = createOrderHistoryApi(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message, data } = await pending;
  toast[status](message);

  if (status == "success") {
    console.log("hello guys", status, message, data);
  }
  // RETURN the result so the caller can use it
  return { status, message, data };
};
