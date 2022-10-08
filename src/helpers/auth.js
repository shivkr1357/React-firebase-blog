// import { setCookie, getCookie, deleteCookie } from "./cookies";
import {
  //   setLocalStorage,
  getLocalStorage,
  //   deleteLocalStorage,
} from "./localStorage";

// export const setAuthentication = (token, user) => {
//   setCookie("token", token);
//   setLocalStorage("user", user);
// };

export const isAuthenticated = () => {
  if (getLocalStorage("isAuth")) {
    return getLocalStorage("isAuth");
  } else {
    return false;
  }
};

// export const logout = () => {
//   deleteCookie("token");
//   deleteLocalStorage("user");
// };
