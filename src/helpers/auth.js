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
import { auth } from "../firebase-config";

export const setAuthentication = (isAuth, userGoogle) => {
  console.log();
  auth.onAuthStateChanged((user) => {
    if (user) {
      setCookie("isAuth", isAuth);
      setLocalStorage("isAuth", isAuth);
      setLocalStorage("user", user);
      setSessionStorage("isAuth", isAuth);
    }
  });
};

export const isAuthenticated = () => {
  if (
    getLocalStorage("user") &&
    getLocalStorage("isAuth") &&
    getLocalStorage("isAuth") === true
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
