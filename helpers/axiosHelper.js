import axios from "axios";
import { get } from "mongoose";
const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};
const getRefreshJWT = () => {
  return localStorage.getItem("refreshJWT");
};

export const apiProcessor = async ({
  method,
  url,
  data,
  isPrivate,
  isRefreshToken,
}) => {
  const headers = {
    Authorization: isPrivate
      ? isRefreshToken
        ? getRefreshJWT()
        : getAccessJWT()
      : null, // No auth if not private
  };

  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
      isPrivate,
    });
    console.log("responsed data", response.data);
    return response.data;
  } catch (error) {
    console.log("error is", error.message);
  }
};
