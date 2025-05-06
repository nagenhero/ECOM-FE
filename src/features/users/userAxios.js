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
