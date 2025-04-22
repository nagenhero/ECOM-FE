import axios from "axios";
export const apiProcessor = async ({ method, url, data, isPrivate }) => {
  //   const headers = {
  //     Authorization: null,
  //   };
  try {
    const response = await axios({
      method,
      url,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error is", error.message);
  }
};
