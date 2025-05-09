import axios from "axios";
import { get } from "mongoose";
import { toast } from "react-toastify";
import { fetchNewAccessJWTApi } from "../src/features/users/userAxios";
const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcessor = async ({
  method, //get orginal
  showToast,
  url, //authep orginal
  data,
  isPrivate, //true orginal call
  isRefreshToken, //false orginal call
}) => {
  const headers = {
    Authorization: isPrivate
      ? isRefreshToken
        ? getRefreshJWT()
        : getAccessJWT()
      : null, // No auth if not private
  };

  try {
    const responsePending = axios({
      method,
      url,
      showToast,
      data,
      headers,
      isPrivate,
    });
    if (showToast) {
      toast.promise(responsePending, {
        pending: "please wait...",
      });
    }
    const result = await responsePending;

    console.log("dddd", result.data);
    showToast && toast[result.data.status](result.data.message);
    // console.log("responsed data", data);
    console.log("eee", result);
    return result.data;

    // return response.data;
  } catch (error) {
    console.log("error1", error);
    const msg = error?.response?.data?.message || error.message;
    showToast && toast.error(msg);

    console.log("error is", error?.response?.data?.message);
    if (error?.response?.data?.message == "jwt expired") {
      //call renew jwt token
      const { accessToken } = await fetchNewAccessJWTApi();
      console.log("result", accessToken);
      if (accessToken) {
        sessionStorage.setItem("accessJWT", accessToken);
        //call apiprocessor
        return apiProcessor({
          method,
          url,
          data,
          isPrivate,
          isRefreshToken,
        });
      } else {
      }
      //get newly access token from refresh token and store in session storage
    }
  }
};
