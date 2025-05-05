import { useDispatch } from "react-redux";
import {
  fetchNewAccessJWTApi,
  fetchUserDetailApi,
  loginApi,
} from "./userAxios";
import { setUser } from "./userSlice";

export const loginAction = (form, navigate) => async (dispatch) => {
  //call login api
  const data = await loginApi({ ...form });

  console.log("data is", data);
  if (data.status == "success") {
    dispatch(setUser(data.user));
    //store acess token in session
    sessionStorage.setItem("accessJWT", data.accessToken);
    //store the local storage for refresh
    localStorage.setItem("refreshJWT", data.refreshToken);
  }
  console.log("type of data:", typeof data);
  navigate("/dashboard");
};
// action to get user object
export const getUserObj = () => async (dispatch) => {
  const { status, user } = await fetchUserDetailApi();

  //update store

  if (status == "success") {
    console.log("right track");
    dispatch(setUser(user));
  }
};
export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");
  console.log("AUTO LOGIN");
  // when access JWT exists
  if (accessJWT) {
    dispatch(getUserObj());
    return;
  }

  //when accessJWT do not exist but refreshJWT exist
  if (refreshJWT) {
    const { accessToken } = await fetchNewAccessJWTApi();
    if (accessToken) {
      sessionStorage.setItem("accessJWT", accessToken);
      dispatch(getUserObj());
    }
  }
};
