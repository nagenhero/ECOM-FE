import { apiProcessor } from "../../../helpers/axiosHelper";
const authEP = import.meta.env.VITE_APP_ROOT_URL + "/auth";

//calling api login backend
export const loginApi = (loginObj) => {
  return apiProcessor({
    method: "post",
    url: authEP + "/login",
    data: loginObj,
    isPrivate: false,
    isRefreshToken: false,
    showToast: true,
  });
};
//verify user
export const verifyApi = (sessionId, t) => {
  const apiObj = {
    method: "post",
    url: `${authEP}/verify-user?sessionId=${sessionId}&token=${t}`,
    isPrivate: false,
    isRefreshToken: false,
  };

  console.log("FETCH USER API");

  return apiProcessor(apiObj);
};
//CALLING SIGNUPAPI
export const signUpApi = (signUpObj) => {
  return apiProcessor({
    method: "post",
    url: authEP + "/register",
    data: signUpObj,
    isPrivate: false,
    isRefreshToken: false,
    showToast: true,
  });
};

//activate-use
export const activateNewUserApi = () => {
  const Obj = {
    method: "post",
    url: authEP + "/activate-use",
  };

  return apiProcessor(Obj);
};
export const fetchUserDetailApi = () => {
  const apiObj = {
    method: "get",
    url: authEP,
    isPrivate: true,
    isRefreshToken: false,
  };

  console.log("FETCH USER API");

  return apiProcessor(apiObj);
};

export const fetchCustomerDetailApi = () => {
  const apiObj = {
    method: "get",
    url: authEP + "/all-customers",
    isPrivate: true,
    isRefreshToken: false,
  };

  console.log("FETCH all customer API");

  return apiProcessor(apiObj);
};

//reques new refresh renews
export const fetchNewAccessJWTApi = () => {
  const Obj = {
    method: "get",
    url: authEP + "/renew-jwt",
    isPrivate: true,
    isRefreshToken: true,
  };

  return apiProcessor(Obj);
};
//logout
export const logOutApi = () => {
  const Obj = {
    method: "get",
    url: authEP + "/logout",
    isPrivate: true,
    isRefreshToken: false,
  };

  return apiProcessor(Obj);
};

//loginApi returns whatever apiProcessor(...) returns. But loginApi itself doesn’t "store" anything.

//returns response data when calling apiProcessor and again return again who is calling the loginApi function from userSigninform
