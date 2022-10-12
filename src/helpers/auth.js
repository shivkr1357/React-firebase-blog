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
  setCookie("isAuth", true);
  setLocalStorage("isAuth", true);
  setSessionStorage("isAuth", true);
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
