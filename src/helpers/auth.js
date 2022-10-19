import { setCookie, getCookie, deleteCookie } from "./cookies";
import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from "./localStorage";

import {
  getSessionStorage,
  setSessionStorage,
  deleteSessionStorage,
} from "./session";

export const setAuthentication = (isAuth, user) => {
  setCookie("isAuth", isAuth);
  setLocalStorage("isAuth", isAuth);
  setLocalStorage("user", user);
  setSessionStorage("isAuth", isAuth);
};

export const isAuthenticated = () => {
  if (
    getCookie("isAuth") &&
    getLocalStorage("isAuth") &&
    getSessionStorage("isAuth")
  ) {
    return true;
  } else {
    return false;
  }
};

export const logout = () => {
  deleteCookie("isAuth");
  deleteLocalStorage("isAuth");
  deleteSessionStorage("isAuth");
};
